import React from 'react';
import { NavLink } from 'react-router-dom';

type PageType = 'home' | 'about' | 'courses' | 'contact' | 'exercices';

interface NavigationItem {
  id: PageType;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface HeaderProps {
  navigation: NavigationItem[];
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  currentPage,
  onNavigate,
  isMenuOpen,
  onToggleMenu
}) => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="text-xl font-bold text-blue-600 hover:text-blue-700">
                GUIDE
              </NavLink>
            </div>
          </div>
          
          {/* Navigation Desktop */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => onNavigate(item.id)}
                className={({ isActive }: { isActive: boolean }) => `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive || currentPage === item.id
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={onToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={() => {
                      onNavigate(item.id);
                      onToggleMenu();
                    }}
                    className={({ isActive }: { isActive: boolean }) => `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      isActive || currentPage === item.id
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
    </header>
  );
};

export default Header;
