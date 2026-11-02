'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

// ── Trade route data ──────────────────────────────────────────────────────────
const ORIGIN = { lat: 11.0, lng: 77.0 };

interface ArcDatum {
  startLat: number; startLng: number;
  endLat:   number; endLng:   number;
  color:    string; animTime: number;
}

const DESTINATIONS = [
  { lat: 25.2, lng:  55.3, color: '#e8a840', animTime: 2000, delay:  600 },
  { lat: 52.3, lng:   4.9, color: '#d4884a', animTime: 2600, delay: 1400 },
  { lat:  3.1, lng: 101.7, color: '#f0c060', animTime: 1800, delay: 2200 },
  { lat:  1.3, lng: 103.8, color: '#c8a060', animTime: 1900, delay: 3000 },
  { lat: 31.2, lng: 121.5, color: '#e0b848', animTime: 2200, delay: 3800 },
  { lat: 51.5, lng:  -0.1, color: '#d89050', animTime: 3000, delay: 4600 },
  { lat: 40.7, lng: -74.0, color: '#f4d070', animTime: 3400, delay: 5400 },
];

// ── India glow shader ─────────────────────────────────────────────────────────
const INDIA_GLOW_VS = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const INDIA_GLOW_FS = /* glsl */`
  varying vec2 vUv;
  void main() {
    float PI = 3.14159265;
    float lon = (vUv.x - 0.5) * 2.0 * PI;
    float lat =  (vUv.y - 0.5) * PI;
    float il = -12.0 * PI / 180.0;
    float ia =  20.0 * PI / 180.0;
    float dlon = lon - il; float dlat = lat - ia;
    float a = sin(dlat*0.5)*sin(dlat*0.5) + cos(lat)*cos(ia)*sin(dlon*0.5)*sin(dlon*0.5);
    float d = 2.0 * atan(sqrt(a), sqrt(max(0.0, 1.0 - a)));
    float g = pow(1.0 - smoothstep(0.0, 0.44, d), 1.4);
    gl_FragColor = vec4(vec3(1.0, 0.68, 0.12) * g, g * 0.90);
  }
`;

const BASE_LAT = 22;
const BASE_LNG = 78;
const BASE_ALT = 1.85;
const MAX_ROT_SPEED = 18; // degrees / second at full mouse deflection

export default function HeroGlobeScene() {
  const containerRef  = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globeRef      = useRef<any>(null);
  const rafRef        = useRef<number | null>(null);
  const isHovering    = useRef(false);
  const mouseRelX     = useRef(0);     // −1 (far left) … +1 (far right)
  const currentLng    = useRef(BASE_LNG);
  const lastFrameTime = useRef(performance.now());

  const [GlobeComp, setGlobeComp] = useState<React.ComponentType<Record<string, unknown>> | null>(null);
  const [arcs, setArcs]           = useState<ArcDatum[]>([]);
  const [size, setSize]           = useState({ w: 900, h: 1100 });

  // ── Load react-globe.gl ───────────────────────────────────────────────────
  useEffect(() => {
    import('react-globe.gl')
      .then(m => setGlobeComp(() => m.default as React.ComponentType<Record<string, unknown>>))
      .catch(console.warn);
  }, []);

  // ── Container size ────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Rotation RAF loop ─────────────────────────────────────────────────────
  useEffect(() => {
    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop);
      const dt = Math.min((now - lastFrameTime.current) / 1000, 0.05);
      lastFrameTime.current = now;

      if (isHovering.current && globeRef.current) {
        // Speed proportional to how far the cursor is from center (−1..+1)
        currentLng.current += mouseRelX.current * MAX_ROT_SPEED * dt;
        globeRef.current.pointOfView(
          { lat: BASE_LAT, lng: currentLng.current, altitude: BASE_ALT },
          0, // instant — smoothed naturally by RAF 60fps
        );
      }
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ── Horizontal trackpad / wheel rotation ─────────────────────────────────
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Only respond to predominantly horizontal scrolls (2-finger trackpad swipe)
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      currentLng.current += e.deltaX * 0.06;
      globeRef.current?.pointOfView(
        { lat: BASE_LAT, lng: currentLng.current, altitude: BASE_ALT },
        0,
      );
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  // ── Globe ready: set view + inject India glow ─────────────────────────────
  const handleGlobeReady = useCallback(() => {
    const gRef = globeRef.current;
    if (!gRef) return;
    gRef.pointOfView({ lat: BASE_LAT, lng: BASE_LNG, altitude: BASE_ALT }, 0);

    const scene: THREE.Scene = gRef.scene();
    let earthParent: THREE.Object3D | null = null;
    scene.traverse((obj: THREE.Object3D) => {
      if (earthParent) return;
      if (
        obj instanceof THREE.Mesh &&
        obj.geometry instanceof THREE.SphereGeometry &&
        (obj.geometry as THREE.SphereGeometry).parameters.radius > 90
      ) {
        earthParent = obj.parent;
      }
    });

    const target = earthParent ?? scene;
    const R = 100;
    const glowMesh = new THREE.Mesh(
      new THREE.SphereGeometry(R * 1.001, 128, 128),
      new THREE.ShaderMaterial({
        vertexShader:   INDIA_GLOW_VS,
        fragmentShader: INDIA_GLOW_FS,
        transparent:    true,
        blending:       THREE.AdditiveBlending,
        depthWrite:     false,
        side:           THREE.FrontSide,
      }),
    );
    target.add(glowMesh);
  }, []);

  // ── Arc stagger ───────────────────────────────────────────────────────────
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    DESTINATIONS.forEach(dest =>
      timers.push(setTimeout(() =>
        setArcs(prev => [...prev, {
          startLat: ORIGIN.lat, startLng: ORIGIN.lng,
          endLat:   dest.lat,   endLng:   dest.lng,
          color:    dest.color, animTime: dest.animTime,
        }]),
        dest.delay,
      )),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // ── Hover handlers ────────────────────────────────────────────────────────
  const handleMouseEnter = () => { isHovering.current = true; };
  const handleMouseLeave = () => { isHovering.current = false; mouseRelX.current = 0; };
  const handleMouseMove  = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Normalise −1 (left edge) … +1 (right edge)
    mouseRelX.current = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  };

  const originPoint = [{ lat: ORIGIN.lat, lng: ORIGIN.lng }];

  return (
    <div
      style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Globe container — pointer events ON so hover/mouse works */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          right:  '-8%',
          top:    '-10%',
          width:  '68%',
          height: '120%',
          cursor: 'ew-resize',  // hint that horizontal interaction is available
          pointerEvents: 'auto',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {GlobeComp && (
          <GlobeComp
            ref={globeRef as React.Ref<unknown>}
            width={size.w}
            height={size.h}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor="#2255cc"
            atmosphereAltitude={0.18}
            pointOfView={{ lat: BASE_LAT, lng: BASE_LNG, altitude: BASE_ALT }}
            onGlobeReady={handleGlobeReady}
            arcsData={arcs}
            arcColor={(d: unknown) => (d as ArcDatum).color}
            arcDashLength={0.35}
            arcDashGap={0.65}
            arcDashAnimateTime={(d: unknown) => (d as ArcDatum).animTime}
            arcStroke={0.5}
            arcAltitudeAutoScale={0.35}
            pointsData={originPoint}
            pointColor={() => '#ffcc44'}
            pointAltitude={0.01}
            pointRadius={0.45}
            pointsMerge={false}
            enablePointerInteraction={false}
          />
        )}
      </div>

      {/* Top fade — navbar area readability */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '130px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)',
        pointerEvents: 'none', zIndex: 3,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px',
        background: 'linear-gradient(to top, var(--color-black) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)',
        pointerEvents: 'none', zIndex: 3,
      }} />
    </div>
  );
}
