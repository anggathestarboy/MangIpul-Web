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


const HeroPage = ({namaPage}: any) => {

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
    <div>
           <section className="relative h-[8vh]  after:bg-black/50 min-h-[350px] w-full overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/hero.jpeg" // Ganti dengan gambar hero Anda
                  alt="Tentang Mang Ipul"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              </div>
              
              {/* Hero Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-white mb-6">
                      <span className="block">{namaPage}</span>
                    </h1>
                  </div>
                </div>
              </div>
      
           
            </section>
    </div>
  )
}

export default HeroPage
