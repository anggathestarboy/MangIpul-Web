"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Resep Sederhana,{" "}
              <span className="text-white">Rasa Istimewa</span>{" "}
            </h1>
            <p
              className={`mt-4 text-lg text-gray-100 max-w-lg transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Mang Ipul menghadirkan berbagai jajanan mie, mie lidi, dan
              makaroni dengan resep turun-temurun yang sudah teruji
              kelezatannya.
            </p>
            <div
              className={`mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#products"
                className="px-6 py-3 bg-orange-900 text-white font-medium rounded-lg hover:bg-orange-600 transition duration-300 text-center hover-lift"
              >
                Pesan Sekarang
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-white border border-white font-medium rounded-lg 
             hover:bg-gray-400 hover:text-white transition duration-300 
             text-center hover-lift"
              >
                Lihat Produk
              </a>
            </div>
          </div>
          <div
            className={`md:w-1/2 flex justify-center transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-white rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="bg-white w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center">
                  <img
                    src="makroni.jpeg"
                    alt="Mie Goreng Spesial"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-orange-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
