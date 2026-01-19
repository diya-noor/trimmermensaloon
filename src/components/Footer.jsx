import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-primary-500/60 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-primary-400">
              Trimmer Men's Saloon
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Rawalpindi's premier men's salon in Satellite Town. Professional haircuts, beard styling, facials & grooming since 2009.
            </p>
            <p className="text-sm text-gray-500 italic">
              Wakeup Beauty Its Time To Best
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  B-991 Haideri Chowk, 4th Road, B-block Satellite Town, Commercial Market, Near Chicken Base, Basement of Samba Bank, Rawalpindi
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div className="text-gray-400">
                  <a href="tel:0307-5552224" className="hover:text-primary-400 transition-colors block">
                    0307-5552224
                  </a>
                  <a href="tel:0300-5049246" className="hover:text-primary-400 transition-colors block">
                    0300-5049246
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:trimmermenssaloon@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  trimmermenssaloon@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Open 7 Days a Week</span>
                <span className="text-primary-400">9 AM - 12 AM</span>
              </li>
              <li className="text-sm text-gray-500 italic">
                Monday - Sunday
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1AFL1LaLPm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#0d5dca] flex items-center justify-center transition-all hover:scale-125 transform shadow-lg hover:shadow-xl"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/trimmer.menssaloon?igsh=bmxudWh0b2tjMTRz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] hover:from-[#d12e4a] hover:to-[#a82d72] flex items-center justify-center transition-all hover:scale-125 transform shadow-lg hover:shadow-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.tiktok.com/@trimmermenssaloon?_r=1&_t=ZS-92NkEm7uOlM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#00f2ea] hover:bg-[#00d9d1] flex items-center justify-center transition-all hover:scale-125 transform shadow-lg hover:shadow-xl"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-5 h-5 text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Trimmer Men's Saloon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
