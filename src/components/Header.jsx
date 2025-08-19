import { NavLink } from 'react-router-dom';

export default function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <header className="py-6 px-4 sm:px-8 lg:px-12 flex justify-between items-center text-lg z-20 relative">
      {/* Left-aligned logo/brand */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-yellow-400 rounded-sm transform rotate-45"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full -ml-2"></div>
      </div>

      {/* Navigation links */}
      <nav className="flex space-x-6 sm:space-x-12">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-yellow-600 ${isActive ? 'text-yellow-600 border-b-2 border-yellow-600' : 'text-gray-800'}`
            }
          >
            {item.name}
          </NavLink>
        ))}
        {/* Get in touch link with arrow icon */}
        <a
          href="/get-in-touch"
          className="flex items-center font-medium transition-colors hover:text-yellow-600"
        >
          Get in touch
          <span className="ml-2 text-sm">↗</span>
        </a>
      </nav>
    </header>
  );
}