import { CheckCircle, Search, Calculator, FileText, Truck, Package } from 'lucide-react';
import { Link } from 'react-router';

export default function Services() {
  const services = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Busca e seleção de fornecedores",
      description: "Encontramos os melhores fornecedores internacionais para seus produtos, garantindo qualidade e preços competitivos.",
      features: [
        "Análise de fornecedores qualificados",
        "Verificação de credibilidade",
        "Negociação de melhores condições",
        "Garantia de qualidade"
      ]
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Cotação e organização do frete",
      description: "Organizamos todo o frete internacional com transparência total de custos e prazos.",
      features: [
        "Cotação de frete marítimo e aéreo",
        "Comparação de transportadoras",
        "Otimização de rotas",
        "Controle de prazos"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Cálculo transparente de custos",
      description: "Calculamos todos os custos envolvidos na importação para você ter visibilidade total do investimento.",
      features: [
        "Impostos e taxas",
        "Custos portuários",
        "Seguros internacionais",
        "Despesas administrativas"
      ]
    },
    {
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: "Documentação e liberação alfandegária",
      description: "Cuidamos de toda a documentação necessária e do processo de liberação alfandegária.",
      features: [
        "Preparação de documentos",
        "Classificação fiscal",
        "Licenças de importação",
        "Acompanhamento alfandegário"
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Desembaraço e entrega final",
      description: "Realizamos o desembaraço aduaneiro e coordenamos a entrega final na sua empresa.",
      features: [
        "Desembaraço aduaneiro completo",
        "Retirada no porto/aeroporto",
        "Entrega no destino final",
        "Acompanhamento em tempo real"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços Completos de Importação
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Cuidamos de tudo para você importar sem dor de cabeça
            </p>
            <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-2">Nosso Diferencial:</h3>
              <p className="text-lg text-blue-100">
                "Você escolhe o produto, nós fazemos o resto"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Processo Simples e Transparente
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Em apenas 4 passos simples, cuidamos de toda sua importação do início ao fim
          </p>
          <Link
            to="/processo"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Ver Como Funciona
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pronto para começar sua importação?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fale com nossos especialistas e receba uma cotação personalizada em 24 horas
          </p>
          <Link
            to="/contato"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Solicitar Cotação Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
