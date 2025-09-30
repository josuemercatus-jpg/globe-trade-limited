import { Globe, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8" />
              <span className="text-xl font-bold">Globe Trade Limited</span>
            </Link>
            <p className="text-blue-200 max-w-md">
              Assessoria completa de importação para empresários brasileiros que buscam 
              reduzir custos e eliminar burocracia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/servicos" className="text-blue-200 hover:text-white transition-colors">
                Serviços
              </Link>
              <Link to="/processo" className="text-blue-200 hover:text-white transition-colors">
                Como Funciona
              </Link>
              <Link to="/sobre" className="text-blue-200 hover:text-white transition-colors">
                Sobre Nós
              </Link>
              <Link to="/equipe" className="text-blue-200 hover:text-white transition-colors">
                Equipe
              </Link>
              <Link to="/contato" className="text-blue-200 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Legal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informações Legais</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-blue-200">
                  <p>27 Old Gloucester Street</p>
                  <p>WC1N 3AX, London, UK</p>
                  <p className="mt-1">Company number: 13001276</p>
                </div>
              </div>
              <Link 
                to="/privacidade" 
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>Política de Privacidade</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Globe Trade Limited. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
