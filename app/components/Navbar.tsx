"use client";
import React from 'react';

interface NavbarProps {
  toggleMobileMenu: () => void;
  pageTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMobileMenu, pageTitle }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3 lg:px-10">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
            <i className="fas fa-bars text-xl"></i>
          </button>
          <h1 className="text-white font-semibold text-lg hidden md:block">{pageTitle}</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          {/* Notification Bell */}
          <button className="relative text-white hover:text-orange-300 transition-colors">
            <i className="fas fa-bell text-xl"></i>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Messages */}
          <button className="relative text-white hover:text-orange-300 transition-colors hidden sm:block">
            <i className="fas fa-envelope text-xl"></i>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-xs flex items-center justify-center">
              5
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <img
              src="https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff"
              alt="User"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white border-opacity-50"
            />
            <div className="hidden lg:block">
              <p className="text-white text-sm font-medium">Admin User</p>
              <p className="text-white text-opacity-70 text-xs">Super Admin</p>
            </div>
            <i className="fas fa-chevron-down text-white text-opacity-70 text-xs hidden lg:block"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;