import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact Us — Origin Exims',
  description: 'Reach out directly to the Origin Exims trade desk for sourcing inquiries, export quotes and logistics coordination.',
};

export default function ContactPage() {
  return (
    <Section
      background="porcelain"
      style={{
        paddingTop: 'clamp(6rem, 12vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
      }}
    >
      <Container>
        <ContactSection />
      </Container>
    </Section>
  );
}
