import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import HeroPage from '../components/HeroPage'
import Contact from '../components/Contact'

const ContactPage = () => {
  const address = "Jl Simpang ledok, RT.05/RW.3, Krajan, Pakisjajar, Kec. Pakis, Kabupaten Malang, Jawa Timur 65154"
  const encodedAddress = encodeURIComponent(address)
  const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`

  return (
    <div>
      <Navigation/>
      <HeroPage namaPage="Kontak Kami"/>
 
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Lokasi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi langsung outlet kami di alamat berikut untuk pengalaman berbelanja yang lebih personal
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] relative">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Lokasi Mang Ipul"
                  className="absolute inset-0"
                />
                {/* Overlay untuk estetika */}
                <div className="absolute inset-0 border-4 border-white/20 pointer-events-none"></div>
              </div>
            </div>

            {/* Address Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">Alamat Lengkap</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-dark mb-4">Petunjuk Lokasi</h4>
                  <ul className="space-y-3">
                    {[
                      "Dari arah Surabaya: Ambil exit tol Pakis, belok kiri",
                      "Dari arah Malang Kota: Ikuti jalan utama menuju Pakis",
                      "Lokasi berada di sebelah kanan jalan, dekat pertigaan",
                     
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Dapatkan Petunjuk Arah
                  </a>
                </div>
              </div>
            </div>
          </div>

  {/* Operating Hours */}
<div className="mt-12 bg-gradient-to-r from-primary/5 via-white to-primary/5 rounded-2xl p-8">
  <h3 className="text-2xl font-bold text-dark mb-8 text-center">Jam Operasional</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
    {[
      { 
        day: "Senin - Sabtu", 
        hours: "08:00 - 16:00", 
        status: "Buka",
        color: "bg-green-100",
        textColor: "text-green-800",
        dotColor: "bg-green-500"
      },
      { 
        day: "Minggu", 
        hours: "Libur", 
        status: "Tutup",
        color: "bg-red-100",
        textColor: "text-red-800",
        dotColor: "bg-red-500"
      },
      { 
        day: "Tanggal Merah", 
        hours: "Libur", 
        status: "Tutup",
        color: "bg-red-100",
        textColor: "text-red-800",
        dotColor: "bg-red-500"
      },
    ].map((schedule, index) => (
      <div 
        key={index} 
        className={`text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
          schedule.status === "Tutup" ? "opacity-90" : ""
        }`}
      >
        <p className="font-semibold text-dark text-lg mb-2">{schedule.day}</p>
        <p className={`text-xl font-bold my-3 ${
          schedule.status === "Buka"  ? "text-green-600" : "text-red-600"
        }`}>
          {schedule.hours}
        </p>
        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${schedule.color} ${schedule.textColor}`}>
          <span className={`w-2 h-2 ${schedule.dotColor} rounded-full mr-2`}></span>
          {schedule.status}
        </span>
        
     
      </div>
    ))}
  </div>
  
  {/* Additional Note */}
  <div className="mt-8 text-center max-w-2xl mx-auto">
    <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-800 rounded-lg">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-sm">
        Untuk pesanan khusus di luar jam operasional, silakan hubungi kami terlebih dahulu
      </span>
    </div>
  </div>
</div>
        </div>
      </section>


     <Contact/>
      <Footer/>
    </div>
  )
}

export default ContactPage