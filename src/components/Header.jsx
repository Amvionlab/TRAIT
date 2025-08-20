import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import Logo from './logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.backgroundColor = '#1F1F1F'; // bgBlack
      document.documentElement.style.color = '#ffffff'; // white text
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.backgroundColor = '#ffffff'; // white
      document.documentElement.style.color = '#000000'; // black text
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden sm:flex py-6 px-4 sm:px-8 lg:px-12 justify-between items-center text-lg z-20 relative">
        <div className="flex items-center mt-2 -ml-6">
          <img src={Logo} alt="Logo" className="w-16 h-16" />
        </div>

        <nav className="flex space-x-10 sm:space-x-20 -mt-10 text-lg items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium relative overflow-hidden text-black dark:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                ${isActive ? 'after:!bg-[#FFC501] after:!scale-x-100' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <span className="flex items-center">
            <a
              href="/get-in-touch"
              className="font-medium relative overflow-hidden text-black dark:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Get in touch
            </a>
            <ArrowUpRight className="ml-1 w-5 h-5 text-black dark:text-white" />
          </span>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <div
              className={`w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                theme === 'light' ? 'translate-x-0' : 'translate-x-8'
              }`}
            >
              {theme === 'light' ? (
                <Sun className="w-4 h-4 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 text-gray-300" />
              )}
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile/Tablet Header with Hamburger Icon */}
      <header className="sm:hidden flex py-6 px-4 justify-between items-center z-20 relative">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <div
              className={`w-4 h-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                theme === 'light' ? 'translate-x-0' : 'translate-x-6'
              }`}
            >
              {theme === 'light' ? (
                <Sun className="w-3 h-3 text-yellow-500" />
              ) : (
                <Moon className="w-3 h-3 text-gray-300" />
              )}
            </div>
          </button>
          <button onClick={() => setIsMenuOpen(true)}>
            <svg className="w-8 h-8 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu (Pop-up) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full pt-10 bg-[#FFC501] p-4 z-50 flex flex-col items-center justify-center animate-slideIn">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-14 right-4 text-xl font-medium text-gray-800">
            Close X
          </button>
          <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium relative overflow-hidden text-gray-800 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                    ${isActive ? 'after:!scale-x-100' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="/get-in-touch" className="flex items-center font-medium relative overflow-hidden text-gray-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-800 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Get in touch <ArrowUpRight className="ml-2 w-5 h-5 text-gray-800" />
              </a>
            </li>
          </ul>
          <p className="text-gray-800 text-sm mt-20"><span className="font-bold">Just Kidding </span>/ Seriously, though</p>
        </div>
      )}
    </>
  );
}