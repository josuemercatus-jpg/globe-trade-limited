import { ArrowRight, Globe, Shield, Truck, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function Home() {
  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Acesso direto aos melhores fabricantes",
      description: "Eliminamos intermediários para você ter acesso direto aos melhores fornecedores internacionais"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Serviço completo e confiável",
      description: "Cuidamos de tudo: do fornecedor à entrega na sua porta, com total transparência"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Adaptável a qualquer volume",
      description: "Atendemos pequenos, médios e grandes empresários com soluções personalizadas"
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Vantagem competitiva garantida",
      description: "Preços baixos e produtos exclusivos para você se destacar no mercado"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Importe para gastar menos e{' '}
              <span className="text-blue-300">vender mais</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Você foca nas vendas, nós cuidamos de toda a burocracia da importação
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Fale com um especialista</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/processo"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center"
              >
                Como funciona
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Globe Trade?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 15 anos de experiência em comércio exterior, oferecendo soluções completas 
              para sua importação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para reduzir seus custos de importação?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Receba uma cotação personalizada em 24 horas e descubra como podemos 
            otimizar seus processos de importação
          </p>
          <Link
            to="/contato"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Solicitar Cotação Gratuita</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-900">15+</div>
              <div className="text-gray-600">Anos de experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-900">3</div>
              <div className="text-gray-600">Países de atuação</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">Foco no cliente</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
