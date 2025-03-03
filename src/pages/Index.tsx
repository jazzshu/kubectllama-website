
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Installation from '@/components/Installation';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll to the target on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle hash in URL on page load
    if (window.location.hash) {
      setTimeout(handleHashChange, 0);
    }

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Listen for clicks on anchor links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          window.location.hash = href;
        }
      }
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Installation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
