'use client';

import { useEffect } from 'react';

export default function Footer() {
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

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ];

  const productsLinks = [
    { label: 'Mie Goreng', href: '#products' },
    { label: 'Mie Lidi', href: '#products' },
    { label: 'Makaroni', href: '#products' },
    { label: 'Paket Catering', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'WhatsApp', icon: '💬', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold">
              <span className="text-primary">Mang</span>
              <span className="text-secondary">Ipul</span>
            </h3>
            <p className="mt-4 text-gray-400">
              Menyajikan kelezatan jajanan mie dengan resep turun-temurun sejak 2010.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produk Kami</h4>
            <ul className="space-y-2">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Berlangganan Promo</h4>
            <p className="text-gray-400 mb-4">
              Dapatkan info promo dan menu terbaru langsung ke email Anda.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition duration-300"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 animate-on-scroll">
          <p>&copy; {new Date().getFullYear()} Mang Ipul UMKM. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Jl. Raya Makanan No. 123, Kec. Lezat, Kota Enak | HP: 0812-3456-7890
          </p>
        </div>
      </div>
    </footer>
  );
}