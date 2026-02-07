'use client';

import { useState, useEffect, useRef } from 'react';
import { testimonials } from '../lib/data';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initTestimonials = () => {
      if (!track1Ref.current || !track2Ref.current) return;

      // Clear existing content
      track1Ref.current.innerHTML = '';
      track2Ref.current.innerHTML = '';

      // Duplicate testimonials to create seamless loop
      const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

      // Create testimonial cards for track 1 (moving right)
      duplicatedTestimonials.forEach((testimonial) => {
        const card = createTestimonialCard(testimonial);
        track1Ref.current?.appendChild(card.cloneNode(true));
      });

      // Create testimonial cards for track 2 (moving left)
      duplicatedTestimonials.reverse().forEach((testimonial) => {
        const card = createTestimonialCard(testimonial);
        track2Ref.current?.appendChild(card.cloneNode(true));
      });

      // Adjust animation duration based on number of cards
      const totalCards = duplicatedTestimonials.length;
      const track1Duration = 40 + totalCards * 0.5;
      const track2Duration = 35 + totalCards * 0.5;

      if (track1Ref.current) {
        track1Ref.current.style.animationDuration = `${track1Duration}s`;
        track1Ref.current.style.animationPlayState = isPaused ? 'paused' : 'running';
      }

      if (track2Ref.current) {
        track2Ref.current.style.animationDuration = `${track2Duration}s`;
        track2Ref.current.style.animationPlayState = isPaused ? 'paused' : 'running';
      }
    };

    initTestimonials();

    // Re-initialize on window resize
    window.addEventListener('resize', initTestimonials);
    return () => window.removeEventListener('resize', initTestimonials);
  }, [isPaused]);

  const createTestimonialCard = (testimonial: any) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';

    // Create rating stars
    let stars = '';
    for (let i = 0; i < testimonial.rating; i++) {
      stars += '<svg class="star w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
    }

    card.innerHTML = `
      <div class="testimonial-content">
        ${testimonial.quote}
      </div>
      <div class="testimonial-author">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
          <div class="rating">
            ${stars}
          </div>
        </div>
      </div>
    `;

    return card;
  };

  return (
    <section id="testimonials" className="py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-dark">Apa Kata Pelanggan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
           dari pelanggan setia yang sudah merasakan kelezatan jajanan Mang Ipul.
          </p>
        </div>
      </div>
      
      {/* Container untuk testimoni bergerak */}
      <div className="testimonial-container mt-12">
        {/* Baris testimoni atas (bergerak ke kanan) */}
        <div 
          ref={track1Ref}
          className="testimonial-track testimonial-track-1 flex"
        />
        
        {/* Baris testimoni bawah (bergerak ke kiri) */}
        <div 
          ref={track2Ref}
          className="testimonial-track testimonial-track-2 flex mt-8"
        />
        
        {/* Overlay gradient untuk efek fade di ujung */}
        <div className="testimonial-overlay-left"></div>
        <div className="testimonial-overlay-right"></div>
      </div>
      
      {/* Pause/Play Button */}
  
    </section>
  );
}