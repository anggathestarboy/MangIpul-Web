"use client";
import Link from 'next/link';
import React, { useState } from 'react';

interface SidebarProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (id: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-500 h-38 flex items-center justify-center relative px-6">
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-30 object-contain"
            />
          </div>
          <button
            className="absolute right-6 lg:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <a href="/dashboard" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500 hover:text-orange-500 bg-gradient-to-r from-orange-100 to-transparent border-l-4 border-orange-500 text-gray-600">
            <i className="fas fa-home w-6 text-center"></i>
            <span className="ml-3 font-medium">Dashboard</span>
          </a>

          {/* Menu Makanan */}
          <div>
            <button
              onClick={() => toggleSubmenu('menu-makanan')}
              className="w-full flex items-center justify-between px-6 py-3 text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500"
            >
              <div className="flex items-center">
                <i className="fas fa-hamburger w-6 text-center text-gray-700"></i>
                <span className="ml-3 font-medium">Produk</span>
              </div>
              <i className={`fas fa-chevron-right text-gray-400 transform transition-transform ${openSubmenus['menu-makanan'] ? 'rotate-90' : ''}`}></i>
            </button>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openSubmenus['menu-makanan'] ? 'max-h-96' : 'max-h-0'}`}>
              <a href="/products" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                List Produk
              </a>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Tambah Produk
              </a>
            
            </div>
          </div>
          <div>
            <button
              onClick={() => toggleSubmenu('menu-category')}
              className="w-full flex items-center justify-between px-6 py-3 text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500"
            >
              <div className="flex items-center">
                <i className="fas fa-hamburger w-6 text-center text-gray-700"></i>
                <span className="ml-3 font-medium">Kategori</span>
              </div>
              <i className={`fas fa-chevron-right text-gray-400 transform transition-transform ${openSubmenus['menu-category'] ? 'rotate-90' : ''}`}></i>
            </button>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openSubmenus['menu-category'] ? 'max-h-96' : 'max-h-0'}`}>
              <a href="/products" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                List Ketegori
              </a>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Tambah Kategori
              </a>
            
            </div>
          </div>


 {/* Pelanggan */}
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500">
            <i className="fas fa-shopping-cart w-6 text-center text-gray-700"></i>
            <span className="ml-3 font-medium">Pesanan</span>
          </a>
    

          {/* Laporan */}
          <div>
            <button
              onClick={() => toggleSubmenu('laporan')}
              className="w-full flex items-center justify-between px-6 py-3 text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500"
            >
              <div className="flex items-center">
                <i className="fas fa-file-invoice-dollar w-6 text-center text-gray-700"></i>
                <span className="ml-3 font-medium">Pencatatan</span>
              </div>
              <i className={`fas fa-chevron-right text-gray-400 transform transition-transform ${openSubmenus['laporan'] ? 'rotate-90' : ''}`}></i>
            </button>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openSubmenus['laporan'] ? 'max-h-96' : 'max-h-0'}`}>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                List Wallet
              </a>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Tipe Transaksi
              </a>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Riwayat Wallet
              </a>
            </div>
          </div>

         

          {/* Pengaturan */}
          <div>
            <button
              onClick={() => toggleSubmenu('pengaturan')}
              className="w-full flex items-center justify-between px-6 py-3 text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-orange-100 hover:to-transparent hover:border-l-4 hover:border-orange-500"
            >
              <div className="flex items-center">
                <i className="fas fa-cog w-6 text-center text-gray-700"></i>
                <span className="ml-3 font-medium">Pengaturan</span>
              </div>
              <i className={`fas fa-chevron-right text-gray-400 transform transition-transform ${openSubmenus['pengaturan'] ? 'rotate-90' : ''}`}></i>
            </button>
            <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openSubmenus['pengaturan'] ? 'max-h-96' : 'max-h-0'}`}>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Profil Akun
              </a>
              <a href="#" className="flex items-center px-12 py-2 text-gray-600 hover:text-orange-600">
                <i className="fas fa-circle text-xs mr-2"></i>
                Ganti Password
              </a>
            
            </div>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-200">
          <Link href="/" className="flex items-center text-red-500 hover:text-red-700 transition-colors" >
            <i className="fas fa-sign-out-alt w-6 text-center"></i>
            <span className="ml-3 font-medium">Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;