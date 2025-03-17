import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/girlfriend-deck', label: 'Girlfriend Deck' },
    { href: '/comparison-mode', label: 'Comparison Mode' },
    { href: '/profile', label: 'Profile' },
    { href: '/settings', label: 'Settings' },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className="top-0 left-0 w-full max-w-md bg-[#4A2B4D] h-16 flex items-center px-4 z-60">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sliding Navigation Menu */}
      <div 
        className={` fixed top-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#4A2B4D] transform transition-transform duration-300 ease-in-out z-50 border-t border-[#5d375f] 
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="py-4">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="block text-white py-3 px-6 hover:bg-[#5d375f] transition-colors text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* No Spacer Needed */}
    </>
  );
}