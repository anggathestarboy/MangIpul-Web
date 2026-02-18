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
import Navigation from '../components/Navigation';
import Register from '../components/Register';

const RegisterPage = () => {
    return (
        <>
         <Navigation/>
 <Register/>
        
        </>
    )

};

export default RegisterPage;