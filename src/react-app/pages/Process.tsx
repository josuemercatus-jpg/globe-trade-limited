import { Package, Search, CheckCircle, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: <Package className="h-12 w-12 text-blue-600" />,
      title: "VOCÊ ESCOLHE",
      subtitle: "o produto que quer importar",
      description: "Informe-nos qual produto você deseja importar. Nossa equipe especializada irá analisar suas necessidades e especificações para encontrar as melhores oportunidades no mercado internacional.",
      details: [
        "Análise detalhada do produto",
        "Estudo de viabilidade comercial",
        "Identificação de oportunidades de mercado",
        "Consultoria sobre regulamentações"
      ]
    },
    {
      number: 2,
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "NÓS ENCONTRAMOS",
      subtitle: "o fornecedor ideal e apresentamos o custo final",
      description: "Utilizamos nossa rede global de fornecedores qualificados para encontrar as melhores opções. Apresentamos uma proposta completa com todos os custos envolvidos na importação.",
      details: [
        "Seleção de fornecedores qualificados",
        "Negociação de melhores preços",
        "Cálculo transparente de todos os custos",
        "Apresentação de proposta detalhada"
      ]
    },
    {
      number: 3,
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "VOCÊ APROVA",
      subtitle: "e nós embarcamos o produto",
      description: "Após sua aprovação, cuidamos de todo o processo de compra, documentação e embarque. Você acompanha cada etapa através de relatórios regulares de status.",
      details: [
        "Processamento da compra",
        "Preparação da documentação",
        "Coordenação do embarque",
        "Acompanhamento em tempo real"
      ]
    },
    {
      number: 4,
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "VOCÊ RECEBE",
      subtitle: "na sua empresa ou no porto",
      description: "Realizamos todo o desembaraço aduaneiro e coordenamos a entrega final. Você recebe seu produto pronto para comercialização, sem se preocupar com burocracias.",
      details: [
        "Desembaraço aduaneiro completo",
        "Liberação alfandegária",
        "Coordenação da entrega",
        "Suporte pós-importação"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Como Funciona: 4 Passos Simples
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Transformamos o complexo processo de importação em uma jornada simples e transparente
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-px h-20 bg-blue-200 transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                          {step.title}
                        </h2>
                        <p className="text-lg text-gray-600">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center transform hover:scale-105 transition-all duration-300">
                      <div className="mb-6 flex justify-center">
                        {step.icon}
                      </div>
                      <div className="text-6xl font-bold text-blue-900 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prazo Médio do Processo
            </h2>
            <p className="text-xl text-gray-600">
              Do primeiro contato à entrega do produto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Análise Inicial</h3>
              <p className="text-gray-600">1-2 dias úteis</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cotação</h3>
              <p className="text-gray-600">3-5 dias úteis</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Embarque</h3>
              <p className="text-gray-600">15-30 dias</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Entrega</h3>
              <p className="text-gray-600">5-7 dias úteis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar seu processo de importação?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Fale com nossos especialistas e inicie hoje mesmo sua jornada de importação sem complicações
          </p>
          <Link
            to="/contato"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Iniciar Minha Importação</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
