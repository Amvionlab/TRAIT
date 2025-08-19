import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <nav className="flex space-x-10 sm:space-x-12 -mt-8 text-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium relative overflow-hidden text-black transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100
                ${isActive ? 'after:!bg-[#FFC501] after:!scale-x-100' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="/get-in-touch"
            className="flex items-center font-medium transition-colors text-black hover:text-black relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            Get in touch
            <span className="ml-2">↗</span>
          </a>
        </nav>
      </header>

      {/* Mobile/Tablet Header with Hamburger Icon */}
      <header className="sm:hidden flex py-6 px-4 justify-between items-center z-20 relative">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
        </div>
        <button onClick={() => setIsMenuOpen(true)}>
          <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Mobile Menu (Pop-up) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#FFC501] text-black p-4 z-50 flex flex-col items-center justify-center animate-slideIn">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 text-2xl font-bold">
            X
          </button>
          <ul className="flex flex-col items-center space-y-6 text-2xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.path} className="text-black" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/get-in-touch" className="text-black flex items-center">
                Get in touch <span className="ml-2">↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}