'use client';

import { useEffect } from 'react';
import { features } from '../lib/data';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold text-dark">Kenapa Memilih Mang Ipul?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Lebih dari sekadar jajanan, ini adalah warisan rasa keluarga yang kami jaga sejak 2010.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`bg-light p-6 rounded-lg shadow-sm hover-lift transition-all duration-300 about-card animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-dark">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-on-scroll">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-4">Cerita Kami</h3>
            <p className="text-gray-600 mb-4">
              Dimulai dari warung kecil di depan rumah pada tahun 2010, Mang Ipul memulai perjalanannya 
              dengan satu tujuan: menghadirkan jajanan mie yang lezat dan terjangkau untuk semua orang.
            </p>
            <p className="text-gray-600 mb-4">
              Dengan resep rahasia keluarga yang telah disempurnakan selama bertahun-tahun, setiap porsi 
              yang kami sajikan adalah bukti cinta dan dedikasi terhadap kualitas.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">13+</div>
                <div className="text-sm text-gray-600">Tahun Berpengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-gray-600">Pelanggan Setia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Variasi Menu</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Warung Mang Ipul"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="font-bold text-primary">Mang Ipul</div>
              <div className="text-sm text-gray-600">Founder & Chef</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}