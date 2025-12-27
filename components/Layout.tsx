import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center text-brand-black font-black">R</div>
              <span className="text-xl font-bold tracking-tight text-white">
                ROHIT <span className="text-brand-yellow">ASWAL</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-sm font-medium text-gray-300 hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="primary" className="py-2.5 px-6 text-xs font-bold uppercase tracking-wider">
                Book a Strategy Call
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-black border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-base font-medium text-white border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="block pt-4">
              <Button variant="primary" className="w-full py-4">
                Book Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-black border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-white mb-2">
          ROHIT <span className="text-brand-yellow">ASWAL</span>
        </h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Scaling brands through profitable ad systems and performance marketing excellence.
        </p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors">LinkedIn</a>
        <a href="mailto:rohit.growthai@gmail.com" className="text-sm text-gray-400 hover:text-brand-yellow transition-colors">Email</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center">
      <p className="text-xs text-gray-600">
        © {new Date().getFullYear()} Rohit Aswal. All rights reserved.
      </p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};