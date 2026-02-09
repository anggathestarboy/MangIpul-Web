'use client';

import React, { useState, FormEvent } from 'react';
import { 
  FaUtensils, 
  FaCookieBite, 
  FaHamburger, 
  FaPizzaSlice, 
  FaStar, 
  FaShippingFast, 
  FaTags,
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaShieldAlt,
  FaExclamationCircle,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import { 
  FcGoogle,
  FcAdvance
} from 'react-icons/fc';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setMessage(null);
    
    // Validation
    if (!formData.username || !formData.password) {
      setMessage({ text: 'Mohon lengkapi semua field yang diperlukan', type: 'error' });
      return;
    }
    
    // Email validation if input looks like email
    if (formData.username.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.username)) {
        setMessage({ text: 'Format email tidak valid', type: 'error' });
        return;
      }
    }
    
    // Simulate login process
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setMessage({ text: 'Login berhasil! Mengarahkan ke dashboard...', type: 'success' });
      
      // In a real app, redirect here
      // router.push('/dashboard');
    }, 1500);
  };

  const handleSocialLogin = (platform: string) => {
    console.log(`Login with ${platform}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Main Fullscreen Container */}
      <div className="flex w-full h-screen">
        
        {/* Left - Hero Section (Full Height) */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#C2410C] to-[#e05a1a]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute top-1/4 left-1/4 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <FaCookieBite className="text-6xl text-white" />
            </div>
            <div 
              className="absolute bottom-1/3 right-1/3 animate-float"
              style={{ animationDelay: '1s' }}
            >
              <FaHamburger className="text-5xl text-white" />
            </div>
            <div 
              className="absolute top-1/3 right-1/4 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <FaPizzaSlice className="text-4xl text-white" />
            </div>
          </div>
          
          {/* Curve Divider */}
          <div className="absolute top-0 right-0 h-full w-32 z-10 overflow-hidden">
            <svg viewBox="0 0 120 100" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0,0 C60,0 40,100 120,100 L120,0 Z" fill="white" />
              <path d="M0,0 Q60,50 0,100" fill="none" stroke="#C2410C" strokeWidth="2" strokeOpacity="0.3" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-20 text-white w-full flex flex-col justify-center p-8 lg:p-12 xl:p-16">
            <div className="max-w-xl">
              <div className="flex items-center mb-8">
              
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Nikmati Kelezatan<br />
                <span className="text-yellow-300">Snack Terbaik</span><br />
                Setiap Hari
              </h1>
              
              <p className="text-white/90 text-lg lg:text-xl mb-10 max-w-lg">
                Temukan berbagai pilihan snack berkualitas tinggi dengan cita rasa autentik yang membuat Anda ketagihan.
              </p>
              
     
              
           
            </div>
          </div>
          
          {/* Bottom Info */}
          <div className="absolute bottom-6 left-8 text-white/70 text-sm">
            © 2026 Mangs Ipul Snack. All rights reserved.
          </div>
        </div>
        
        {/* Right - Login Form (Full Height) */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 md:p-8 lg:p-12 relative overflow-auto">
          {/* Mobile Curve */}
          <div className="lg:hidden absolute top-0 left-0 w-full h-10 z-10">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 Q50,40 100,0 L100,0 L0,0 Z" fill="#C2410C" />
            </svg>
          </div>
          
          {/* Mobile Header */}
          <div className="lg:hidden absolute top-4 left-4 flex items-center z-20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C2410C] to-[#e05a1a] flex items-center justify-center mr-3">
              <FaUtensils className="text-white" />
            </div>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#e05a1a]">
              Mangs Ipul Snack
            </h2>
          </div>
          <br /><br />
          {/* Login Container */}
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mt-12 lg:mt-0">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2410C] to-[#e05a1a]">
                Masuk
                </span>
              </h2>
        
            </div>
            
            {/* Message Display */}
            {message && (
              <div className={`p-4 rounded-xl mb-6 text-center font-medium transition-all duration-300 ${
                message.type === 'error' 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}>
                {message.type === 'error' ? (
                  <FaExclamationCircle className="inline mr-2" />
                ) : (
                  <FaCheckCircle className="inline mr-2" />
                )}
                {message.text}
              </div>
            )}
            
            {/* Form */}
            <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
              {/* Username/Email Field */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3" htmlFor="username">
                  <FaUserCircle className="inline mr-2 text-[#C2410C]" />
                  Username atau Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:border-transparent transition-all duration-300"
                    placeholder="contoh: user@email.com"
                    required
                    autoComplete="username"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaEnvelope />
                  </div>
                </div>
              </div>
              
              {/* Password Field */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-gray-700 text-sm font-medium" htmlFor="password">
                    <FaLock className="inline mr-2 text-[#C2410C]" />
                    Password
                  </label>
                  <a 
                    href="#" 
                    className="text-sm text-[#C2410C] font-medium hover:underline transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle forgot password
                    }}
                  >
                    Lupa password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:border-transparent transition-all duration-300"
                    placeholder="masukkan password"
                    required
                    autoComplete="current-password"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <FaKey />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      showPassword ? 'text-[#C2410C]' : 'text-gray-500 hover:text-[#C2410C]'
                    }`}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
      
              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#C2410C] to-[#e05a1a] text-white font-bold py-4 px-6 rounded-xl focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="inline mr-3 animate-spin" />
                    Memproses login...
                  </>
                ) : (
                  <>
                    <FaSignInAlt className="inline mr-3" />
                    Masuk ke Akun
                  </>
                )}
              </button>
              
    
              
              {/* Register Link */}
              <div className="text-center pt-4 lg:pt-6">
                <p className="text-gray-600">
                  Belum punya akun?
                  <a 
                    href="#" 
                    className="text-[#C2410C] font-bold hover:underline ml-1 transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle register navigation
                    }}
                  >
                    Daftar sekarang
                  </a>
                </p>
              </div>
            </form>
            
            {/* Security Info */}
           
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse-custom {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;