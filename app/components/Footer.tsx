'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { 
  faInstagram, 
  faFacebook, 
  faWhatsapp, 
  faTiktok 
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    { label: 'Home', href: '/' },
    { label: 'Tentang Kami', href: '/About' },
    { label: 'Produk', href: '/Products' },
    { label: 'Testimoni', href: '/#testimonials' },
    { label: 'Kontak', href: '/Contact' },
  ];

  const productsLinks = [
    { label: 'Mie Goreng', href: '#products' },
    { label: 'Mie Lidi', href: '#products' },
    { label: 'Makaroni', href: '#products' },
    { label: 'Paket Catering', href: '#contact' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: faInstagram, 
      url: '#',
      color: 'hover:text-pink-500',
      bgColor: 'hover:bg-pink-500/10'
    },
    { 
      name: 'Facebook', 
      icon: faFacebook, 
      url: '#',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    },
    { 
      name: 'WhatsApp', 
      icon: faWhatsapp, 
      url: '#',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/10'
    },
    { 
      name: 'TikTok', 
      icon: faTiktok, 
      url: '#',
      color: 'hover:text-black',
      bgColor: 'hover:bg-gray-800'
    },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-on-scroll">
          {/* Brand dengan Logo */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Mang Ipul Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-primary">Mang</span>
                <span className="text-white">Ipul</span>
              </h3>
            </div>
            <p className="mt-2 text-gray-400 text-sm">
              Menyajikan kelezatan jajanan mie dengan harga yang pas di kantong
            </p>
            <div className="mt-6 flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-2 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 ${social.color} ${social.bgColor}`}
                  aria-label={social.name}
                >
                  <FontAwesomeIcon 
                    icon={social.icon} 
                    className="w-4 h-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Menu Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block flex items-center group"
                  >
                    <svg 
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Produk Kami</h4>
            <ul className="space-y-2">
              {productsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block flex items-center group"
                  >
                    <svg 
                      className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Berlangganan Promo</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Dapatkan info promo dan menu terbaru langsung ke email Anda.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
                <div className="absolute right-3 top-3 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Berlangganan
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
              <div className="relative w-8 h-8 mr-3">
                <Image
                  src="/logo.png"
                  alt="Mang Ipul Logo"
                  fill
                  className="object-contain opacity-80"
                  sizes="32px"
                />
              </div>
              <p>&copy; {new Date().getFullYear()} <span className="text-primary">Mang Ipul</span> UMKM. All rights reserved.</p>
            </div>
            <p className="text-sm">
             Jl simpang ledok, RT.05/RW.3, Krajan, Pakisjajar, Kec. Pakis, Kabupaten Malang, Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}