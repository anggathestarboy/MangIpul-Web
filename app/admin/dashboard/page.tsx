"use client";
import React, { useState } from 'react';
import Sidebar from '@/app/components/sidebar';
import Navbar from '@/app/components/Navbar';

const DashboardPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Sidebar Component */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Navbar Component */}
        <Navbar 
          toggleMobileMenu={toggleMobileMenu}
          pageTitle="Dashboard"
        />

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 mt-1">Selamat datang di FoodAdmin Dashboard</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
            {/* Card 1 - Total Penjualan */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Penjualan</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">Rp 12.5Jt</p>
                  <p className="text-green-500 text-sm mt-2">
                    <i className="fas fa-arrow-up mr-1"></i>12.5%
                  </p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-coins text-white text-xl"></i>
                </div>
              </div>
            </div>

            {/* Card 2 - Total Pesanan */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Pesanan</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">1,234</p>
                  <p className="text-green-500 text-sm mt-2">
                    <i className="fas fa-arrow-up mr-1"></i>8.2%
                  </p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-shopping-bag text-white text-xl"></i>
                </div>
              </div>
            </div>

            {/* Card 3 - Menu Aktif */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Menu Aktif</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">48</p>
                  <p className="text-orange-500 text-sm mt-2">
                    <i className="fas fa-plus mr-1"></i>3 baru
                  </p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-hamburger text-white text-xl"></i>
                </div>
              </div>
            </div>

            {/* Card 4 - Pelanggan */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Pelanggan</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">856</p>
                  <p className="text-green-500 text-sm mt-2">
                    <i className="fas fa-arrow-up mr-1"></i>15.3%
                  </p>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 gap-4 lg:gap-6 mb-6">
            {/* Grafik Penjualan - SVG Line Chart */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">
                  <i className="fas fa-chart-line text-orange-500 mr-2"></i>
                  Grafik Penjualan Mingguan
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-orange-500">
                  <option>Minggu Ini</option>
                  <option>Minggu Lalu</option>
                  <option>Bulan Ini</option>
                </select>
              </div>
              
              {/* SVG Line Chart */}
              <div className="relative w-full" style={{ height: '300px' }}>
                <svg viewBox="0 0 800 250" className="w-full h-full" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <g>
                    <line x1="50" y1="200" x2="750" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="160" x2="750" y2="160" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="120" x2="750" y2="120" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="80" x2="750" y2="80" stroke="#e5e7eb" strokeWidth="1" />
                    <line x1="50" y1="40" x2="750" y2="40" stroke="#e5e7eb" strokeWidth="1" />
                  </g>

                  {/* Area Fill */}
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e40af" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d="M 50,200 L 50,150 Q 150,120 200,140 T 350,100 T 500,80 T 650,60 L 750,40 L 750,200 Z"
                    fill="url(#areaGradient)"
                  />

                  {/* Line */}
                  <path
                    d="M 50,150 Q 150,120 200,140 T 350,100 T 500,80 T 650,60 L 750,40"
                    stroke="url(#lineGradient)"
                    fill="none"
                    strokeWidth="3"
                  />

                  {/* Data Points */}
                  <circle cx="50" cy="150" r="5" fill="#1e40af" />
                  <circle cx="200" cy="140" r="5" fill="#3b82f6" />
                  <circle cx="350" cy="100" r="5" fill="#3b82f6" />
                  <circle cx="500" cy="80" r="5" fill="#f97316" />
                  <circle cx="650" cy="60" r="5" fill="#f97316" />
                  <circle cx="750" cy="40" r="5" fill="#f97316" />

                  {/* X-axis Labels */}
                  <g className="text-xs fill-gray-500">
                    <text x="50" y="225" textAnchor="middle" fontSize="12">Sen</text>
                    <text x="200" y="225" textAnchor="middle" fontSize="12">Sel</text>
                    <text x="350" y="225" textAnchor="middle" fontSize="12">Rab</text>
                    <text x="500" y="225" textAnchor="middle" fontSize="12">Kam</text>
                    <text x="650" y="225" textAnchor="middle" fontSize="12">Jum</text>
                    <text x="750" y="225" textAnchor="middle" fontSize="12">Sab</text>
                  </g>

                  {/* Y-axis Labels */}
                  <g className="text-xs fill-gray-500">
                    <text x="40" y="205" textAnchor="end" fontSize="11">0</text>
                    <text x="40" y="165" textAnchor="end" fontSize="11">25</text>
                    <text x="40" y="125" textAnchor="end" fontSize="11">50</text>
                    <text x="40" y="85" textAnchor="end" fontSize="11">75</text>
                    <text x="40" y="45" textAnchor="end" fontSize="11">100</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Aktivitas Terbaru & Wallet Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
            {/* Aktivitas Terbaru - Kiri */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                <i className="fas fa-history text-orange-500 mr-2"></i>
                Aktivitas Terbaru
              </h2>
              
              <div className="space-y-4">
                {/* Aktivitas 1 */}
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shopping-bag text-green-600"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Pesanan Baru #INV-001</p>
                    <p className="text-sm text-gray-500">Pizza Margherita (2 item)</p>
                    <p className="text-xs text-gray-400 mt-1">5 menit yang lalu</p>
                  </div>
                  <span className="text-sm font-semibold text-green-600">+Rp 170K</span>
                </div>

                {/* Aktivitas 2 */}
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-utensils text-blue-600"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Menu Baru Ditambahkan</p>
                    <p className="text-sm text-gray-500">Steak Wagyu - Makanan Utama</p>
                    <p className="text-xs text-gray-400 mt-1">15 menit yang lalu</p>
                  </div>
                </div>

                {/* Aktivitas 3 */}
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">Stok Menipis</p>
                    <p className="text-sm text-gray-500">Pasta Carbonara tersisa 5 porsi</p>
                    <p className="text-xs text-gray-400 mt-1">30 menit yang lalu</p>
                  </div>
                </div>

         

    
              </div>

              <button className="w-full mt-4 text-center text-orange-500 hover:text-orange-600 font-medium text-sm">
                Lihat Semua Aktivitas <i className="fas fa-arrow-right ml-1"></i>
              </button>
            </div>

            {/* Wallet Information - Kanan (Hanya 3 Card) */}
            <div className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                <i className="fas fa-wallet text-orange-500 mr-2"></i>
                Wallet Information
              </h2>

              {/* 3 Wallet Cards Saja */}
              <div className="grid grid-cols-1 gap-4">
                {/* Wallet Utama */}
                <div className="bg-gradient-to-r bg-blue-600 rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i className="fas fa-wallet text-orange-700"></i>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Wallet Utama</p>
                        <p className="text-xl font-bold">Rp 45.750.000</p>
                      </div>
                    </div>
                     <span className="bg-white bg-opacity-20 text-gray-950 rounded-full px-2 py-1 text-xs">
                      Detail
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r bg-green-900 rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i className="fas fa-wallet text-orange-700"></i>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Gaji Pegawai</p>
                        <p className="text-xl font-bold">Rp 45.750.000</p>
                      </div>
                    </div>
                    <span className="bg-white bg-opacity-20 text-gray-950 rounded-full px-2 py-1 text-xs">
                      Detail
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-r bg-orange-600 rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i className="fas fa-wallet text-orange-700"></i>
                      </div>
                      <div>
                        <p className="text-blue-100 text-sm">Wallet Utama</p>
                        <p className="text-xl font-bold">Rp 45.750.000</p>
                      </div>
                    </div>
                    <span className="bg-white bg-opacity-20 rounded-full px-2 py-1 text-xs">
                       <span className="bg-white bg-opacity-20 text-gray-950 rounded-full px-2 py-1 text-xs">
                      Detail
                    </span>
                    </span>
                  </div>
                </div>

              
              
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; 2026 FoodAdmin Dashboard. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;