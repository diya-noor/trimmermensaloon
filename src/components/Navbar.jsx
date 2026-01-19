import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Team', path: '/team' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b-2 border-primary-500/60 text-white sticky top-0 z-50 shadow-lg shadow-primary-500/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-16 w-16 rounded-full bg-black p-0.5 border-2 border-primary-500/50 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:border-primary-400">
              <img
                src="/images/trimmer-mens-saloon-logo-rawalpindi.png"
                alt="Trimmer Men's Saloon Logo - Best Men's Salon in Rawalpindi"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors duration-300">Trimmer</h1>
              <p className="text-xs text-primary-500 font-semibold tracking-wider hidden sm:block">MEN'S SALOON</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-primary-400 transition-all duration-300 font-medium relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="tel:0307-5552224"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-primary-400 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:0307-5552224"
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
