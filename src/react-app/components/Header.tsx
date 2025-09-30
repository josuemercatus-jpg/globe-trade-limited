import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Como Funciona', href: '/processo' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Equipe', href: '/equipe' },
    { name: 'Contato', href: '/contato' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/CRUZ-LOGO.jpeg" alt="Globe Trade Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-900">Globe Trade</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-900 border-b-2 border-blue-900 pb-1'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
