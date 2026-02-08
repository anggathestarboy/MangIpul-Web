'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faUsers, 
  faAward, 
  faClock,
  faUtensils,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import HeroPage from './HeroPage';

export default function DetailAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: faUsers,
      title: 'Komunitas',
      description: 'Terlibat aktif dalam komunitas lokal dan mendukung UMKM sekitar.'
    },
    {
      icon: faAward,
      title: 'Kualitas Terbaik',
      description: 'Selalu menggunakan bahan berkualitas tinggi untuk hasil terbaik.'
    },
    {
      icon: faClock,
      title: 'Pengalaman 10+ Tahun',
      description: 'Menguasai resep turun-temurun sejak tahun 2010.'
    },
    {
      icon: faUtensils,
      title: 'Resep Autentik',
      description: 'Mempertahankan cita rasa asli resep keluarga.'
    },
    {
      icon: faHeart,
      title: 'Dibuat dengan Cinta',
      description: 'Setiap hidangan dibuat dengan penuh perhatian dan kasih sayang.'
    }
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
 
<HeroPage namaPage="Tentang Kami"/>
      {/* Main Content Section - Gambar Kiri, Teks Kanan */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Gambar di Kiri */}
            <div className={`transform transition-all duration-1000 delay-50 bg-none ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="relative h-[500px] bg-none rounded-xxl overflow-hidden  group">
                <Image
                  src="/logo.png" // Ganti dengan gambar konten Anda
                  alt="Mang Ipul Membuat Mie"
                  fill
                  className="  bg-gray-50"
                  sizes="(max-width: 500px) 100vw, 50vw"
                />
               
              </div>
              
              {/* Stats card */}
        
            </div>

            {/* Teks Konten di Kanan */}
            <div className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-dark mb-6">
                    Dari Dapur Kecil ke <span className="text-primary">Tempat Favorit</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Berawal dari dapur rumah sederhana, Mang Ipul memulai perjalanannya 
                    dengan satu misi sederhana: menghadirkan jajanan mie yang enak, terjangkau, dan 
                    penuh kenangan.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Dengan resep turun-temurun dan sentuhan cinta dalam setiap masakan, 
                    kini Mang Ipul telah menjadi bagian dari cerita kuliner masyarakat. 
                    Kami percaya bahwa makanan yang baik adalah makanan yang dibuat dengan hati.
                  </p>
                </div>

       
                {/* Call to Action */}
                <div className="pt-6">
                  <a
                    href="/products"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Lihat Produk Kami
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Misi Kami</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Untuk terus menghadirkan kebahagiaan melalui setiap sajian, 
              menjaga kualitas dan cita rasa, serta menjadi bagian dari 
              kenangan indah setiap pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kualitas Terjaga',
                description: 'Selalu menggunakan bahan segar dan berkualitas tinggi'
              },
              {
                title: 'Harga Terjangkau',
                description: 'Tetap terjangkau untuk semua kalangan masyarakat'
              },
              {
                title: 'Pelayanan Ramah',
                description: 'Melayani dengan senyuman dan keramahan khas keluarga'
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg border border-gray-100 text-center transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${900 + index * 200}ms`
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}