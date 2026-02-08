'use client';

import { useState, useEffect } from 'react';
import { products, Product } from '../lib/data';

export default function DetailProducts() {
  const [filter, setFilter] = useState<string>('semua');

  const categories = ['semua', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = filter === 'semua' 
    ? products 
    : products.filter(product => product.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.product-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <section id="products" className="py-16 bg-gray-100 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark">Produk Unggulan Kami</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih dari berbagai varian yang kami sediakan.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-lg shadow-md overflow-hidden hover-lift transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-dark">{product.title}</h3>
                  <span className="text-lg font-bold text-primary">
                    Rp{product.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-orange-50 transition duration-300">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}