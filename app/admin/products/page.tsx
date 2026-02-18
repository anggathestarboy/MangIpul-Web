"use client";
import React, { useState } from 'react';
import Sidebar from '@/app/components/sidebar';
import Navbar from '@/app/components/Navbar';

const ProductsPage: React.FC = () => {
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
          pageTitle="Daftar Menu"
        />

        {/* Page Content */}
        <main className="p-4 lg:p-6">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Daftar Menu Makanan</h1>
            <p className="text-gray-500 mt-1">Kelola semua menu makanan di restoran Anda</p>
          </div>

          {/* Search and Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="relative w-full sm:w-96">
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Cari menu..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-full"
              />
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center hover:from-orange-600 hover:to-orange-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <i className="fas fa-plus mr-2"></i>
              Tambah Menu
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-16 px-4 py-3 bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-tl-lg">No</th>
                    <th className="px-4 py-3 text-left bg-gradient-to-b from-blue-800 to-blue-900 text-white">Menu</th>
                    <th className="px-4 py-3 text-left bg-gradient-to-b from-blue-800 to-blue-900 text-white">Kategori</th>
                    <th className="px-4 py-3 text-left bg-gradient-to-b from-blue-800 to-blue-900 text-white">Harga</th>
                    <th className="px-4 py-3 text-left bg-gradient-to-b from-blue-800 to-blue-900 text-white">Stok</th>
                    <th className="px-4 py-3 text-left bg-gradient-to-b from-blue-800 to-blue-900 text-white">Status</th>
                    <th className="px-4 py-3 text-center bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-tr-lg">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-600">1</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-hamburger text-orange-500 text-lg"></i>
                        </div>
                        <span className="font-medium text-gray-800">Pizza Margherita</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">Makanan Utama</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">Rp 85.000</td>
                    <td className="px-4 py-3 text-gray-600">25</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <i className="fas fa-check-circle mr-1"></i>Tersedia
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-600">2</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-hamburger text-blue-500 text-lg"></i>
                        </div>
                        <span className="font-medium text-gray-800">Burger Special</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">Makanan Utama</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">Rp 65.000</td>
                    <td className="px-4 py-3 text-gray-600">30</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <i className="fas fa-check-circle mr-1"></i>Tersedia
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-600">3</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-leaf text-green-500 text-lg"></i>
                        </div>
                        <span className="font-medium text-gray-800">Salad Caesar</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">Makanan Ringan</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">Rp 45.000</td>
                    <td className="px-4 py-3 text-gray-600">20</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <i className="fas fa-check-circle mr-1"></i>Tersedia
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4 - Segera Habis */}
                  <tr className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-600">4</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-utensils text-orange-500 text-lg"></i>
                        </div>
                        <span className="font-medium text-gray-800">Pasta Carbonara</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">Makanan Utama</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">Rp 70.000</td>
                    <td className="px-4 py-3 text-gray-600">15</td>
                    <td className="px-4 py-3">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <i className="fas fa-exclamation-circle mr-1"></i>Segera Habis
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 5 - Habis */}
                  <tr className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-600">5</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <i className="fas fa-ice-cream text-purple-500 text-lg"></i>
                        </div>
                        <span className="font-medium text-gray-800">Ice Cream Vanilla</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">Dessert</td>
                    <td className="px-4 py-3 font-semibold text-gray-800">Rp 25.000</td>
                    <td className="px-4 py-3 text-gray-600">0</td>
                    <td className="px-4 py-3">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <i className="fas fa-times-circle mr-1"></i>Habis
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-5 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-gray-500 text-sm">
                  Menampilkan <span className="font-medium text-gray-700">1-5</span> dari{' '}
                  <span className="font-medium text-gray-700">10</span> menu
                </p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button className="px-3 py-1 bg-orange-500 text-white rounded-lg">1</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                  <span className="text-gray-400">...</span>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i className="fas fa-chevron-right"></i>
                  </button>
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

export default ProductsPage;