'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    orderType: 'general',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert(`Terima kasih ${formData.name}! Pesanan Anda telah kami terima. Kami akan menghubungi Anda segera.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      orderType: 'general',
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Alamat',
      info: 'Jl. Raya Makanan No. 123, Kec. Lezat, Kota Enak',
      link: '#',
    },
    {
      icon: '📞',
      title: 'Telepon',
      info: '(021) 1234-5678',
      link: 'tel:+622112345678',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'order@mangipul.com',
      link: 'mailto:order@mangipul.com',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold">Pesan Sekarang</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Isi form di bawah untuk memesan atau konsultasi kebutuhan jajanan Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Info Kontak</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-start space-x-4 hover:opacity-80 transition-opacity duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-white/90">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Jam Operasional</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span>09:00 - 22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-on-scroll">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 text-dark"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="0812-3456-7890"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="orderType" className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Pesanan *
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                >
                  <option value="general">Pemesanan Umum</option>
                  <option value="catering">Catering Acara</option>
                  <option value="bulk">Pembelian Grosir</option>
                  <option value="consultation">Konsultasi Menu</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Detail Pesanan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tuliskan menu yang ingin dipesan, jumlah, dan waktu pengantaran..."
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition duration-300 hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Mengirim...
                    </span>
                  ) : (
                    'Kirim Pesanan'
                  )}
                </button>
                <p className="mt-3 text-sm text-gray-600 text-center">
                  * Kami akan membalas pesanan Anda dalam 1x24 jam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}