import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/girlfriendDeck', label: 'Girlfriend Deck' },
    { href: '/comparison', label: 'Comparison Mode' },
    { href: '/profile', label: 'Profile' },
    { href: '/accSetting', label: 'Settings' },
    { href: '/logout', label: 'Logout' },
  ];

  return (
    <>
      {/* Sticky Hamburger Menu Button */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#572649] h-16 flex items-center px-6 z-500">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:opacity-80 transition-opacity"
        >
          {isMenuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </button>
      </div>

      {/* Empty space to prevent content from going under the navbar */}
      <div className="h-16 w-full"></div>
      
      {/* Sliding Navigation Menu */}
      <div 
        className={`fixed top-16 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#572649] transform transition-transform duration-300 ease-in-out z-400 border-t border-[#5d375f] 
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
    </>
  );
}