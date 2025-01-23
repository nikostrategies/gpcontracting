import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { navItems, getPathFromNavItem } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo, Description, and WorkSafeBC Logo */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GP Pacific</h3>
            <p className="text-gray-400 mb-6">
              Building Dreams with Precision, Quality, and Expertise
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
            {/* WorkSafeBC Logo */}
            <a 
              href="https://www.worksafebc.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://agsafebc.ca/wp-content/uploads/2018/11/WorkSafeBC-logo-rgb.jpg"
                alt="WorkSafeBC Logo"
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  {item === 'Contact' ? (
                    <button
                      onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </button>
                  ) : (
                    <Link
                      to={getPathFromNavItem(item)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">Unit 138 - 11782 River Rd</p>
              <p className="mb-2">Richmond, BC</p>
              <p className="mb-2">
                <a href="tel:+17788919076" className="hover:text-white transition-colors duration-300">
                  +1 (778) 891 9076
                </a>
              </p>
              <p>
                <a href="mailto:info@gpcontracting.ca" className="hover:text-white transition-colors duration-300">
                  info@gpcontracting.ca
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GP Pacific Contracting Group LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;