
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Quality Checks', path: '/quality-checks' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/7885caf093d35e71a809bbaf759d8500.jpg"
                alt="JIANSH Spark Plugs Logo"
                className="h-16 w-16 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold tracking-wider">JIANSH</span>
                <span className="text-sm text-[#FF3333] font-semibold uppercase tracking-widest">
                  Spark Plugs
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium spark plugs engineered for superior performance, durability, and reliability. Trusted by professionals worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FF3333] pl-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-[#FF3333] transition-colors duration-300 font-medium uppercase text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FF3333] pl-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-[#FF3333] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Phone</p>
                  <a
                    href="tel:8595010027"
                    className="text-white hover:text-[#FF3333] transition-colors duration-300 font-medium"
                  >
                    8595010027
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-[#FF3333] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Email</p>
                  <a
                    href="mailto:jianshsparkplug@gmail.com"
                    className="text-white hover:text-[#FF3333] transition-colors duration-300 font-medium break-all"
                  >
                    jianshsparkplug@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#FF3333] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">Address</p>
                  <p className="text-white font-medium">
                    S-24, Balram Nagar<br />
                    Loni Industrial Area<br />
                    Loni Estate, Ghaziabad<br />
                    Uttar Pradesh 201102<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} JIANSH Spark Plugs. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Engineered for Excellence | Built for Performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
