'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faPaperPlane,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
      icon: faMapMarkerAlt,
      title: 'Alamat',
      info: 'Jl simpang ledok, RT.05/RW.3, Krajan, Pakisjajar, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154',
      link: 'https://maps.google.com/?q=Jl.+Raya+Makanan+No.+123,+Kec.+Lezat,+Kota+Enak',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: faWhatsapp,
      title: 'WhatsApp',
      info: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: faEnvelope,
      title: 'Email',
      info: 'order@mangipul.com',
      link: 'mailto:order@mangipul.com',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-on-scroll">
          <h2 className="text-3xl font-bold">Kirim Masukan</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Masukan anda sangat berharga bagi kami
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`flex-shrink-0 ${item.bgColor} ${item.color} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon 
                        icon={item.icon} 
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 text-sm mt-1">{item.info}</p>
                    </div>
                    <div className={`text-gray-400 group-hover:text-primary transition-colors duration-300`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </a>
                ))}
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

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-primary text-white font-medium rounded-md hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <FontAwesomeIcon icon={faSpinner} className="w-5 h-5 animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} className="w-5 h-5" />
                      <span>Kirim Masukan</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}