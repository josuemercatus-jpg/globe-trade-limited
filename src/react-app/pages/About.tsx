import { Globe, Target, Award, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  const differentials = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Estrutura própria no Reino Unido, Brasil e China",
      description: "Presença física estratégica nos principais mercados para garantir agilidade e eficiência"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Atuação desde 2020",
      description: "Experiência consolidada no mercado de importação com histórico comprovado de sucesso"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Soluções completas",
      description: "Da busca de fornecedores até a entrega final, cuidamos de todos os aspectos da sua importação"
    }
  ];

  const values = [
    {
      title: "Transparência",
      description: "Comunicação clara e custos transparentes em todo o processo"
    },
    {
      title: "Excelência",
      description: "Comprometimento com a qualidade em cada etapa do serviço"
    },
    {
      title: "Confiabilidade",
      description: "Parceria sólida baseada em resultados consistentes"
    },
    {
      title: "Inovação",
      description: "Soluções modernas para otimizar seus processos de importação"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Globe Trade Limited
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Especializada em assessoria de importação para empresas brasileiras que buscam 
              reduzir custos, eliminar burocracia e ganhar vantagem competitiva no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Democratizar o acesso ao mercado internacional, oferecendo soluções completas 
                de importação que permitem a empresários brasileiros de todos os portes competir 
                em igualdade com grandes corporações.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Acreditamos que toda empresa, independente do seu tamanho, deve ter acesso aos 
                melhores produtos e preços do mercado global. Por isso, eliminamos as barreiras 
                burocráticas e oferecemos expertise especializada para tornar a importação um 
                processo simples e rentável.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                alt="Nossa missão" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de assessoria de importação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all">
                <div className="mb-4 flex justify-center">
                  {differential.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {differential.title}
                </h3>
                <p className="text-gray-600">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e relacionamento com clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Seção de Parceiros e Clientes */}
      <section className="py-20 bg-gray-100"> {/* Use um bg-gray-100 ou similar para destacar, mantendo a harmonia */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Parceiros e Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que confiam na expertise da Globe Trade Limited
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
            {/* Exemplo de logotipo de cliente. Você pode listar vários aqui. */}
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/hair-school-academy.png" // Substitua pela URL pública do seu ativo
                alt="Hair School Academy"
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300" // Logotipos em escala de cinza, ficam coloridos no hover
              />
            </div>
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/eye-pharma.png"
                alt="Eye Pharma"
                className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/medstar.png"
    alt="Medstar"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/gavea-quimica.png"
    alt="Gavea quimica"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
             <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/ophtalmos.png"
    alt="Ophtalmos rotho"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
             <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/cromocil.png"
    alt="Cromocil"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/consulty.png"
    alt="Consulty"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
             <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/BM-advogados.jpg"
    alt="BM advogados"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
             <div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/Captura-de-tela-2025-09-29-214830.png"
    alt="Perna acessorios"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
<div className="flex justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
  <img
    src="/images/natures_personalise.webp"
    alt="Natures personalise"
    className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
  />
</div>
            {/* Repita o bloco <div> para cada logotipo de cliente/parceiro */}
            {/* Você pode adicionar até 8 ou 12 logotipos para ter uma boa grade */}
          </div>
        </div>
      </section>
      {/* Global Presence */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Presença Global
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Nossa estrutura internacional garante agilidade e eficiência em todo o processo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-8 mb-4">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Reino Unido</h3>
                <p className="text-blue-200">
                  Sede europeia para coordenação de fornecedores e logística internacional
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-8 mb-4">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Brasil</h3>
                <p className="text-blue-200">
                  Equipe local especializada em regulamentações brasileiras e atendimento ao cliente
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-8 mb-4">
                <Globe className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">China</h3>
                <p className="text-blue-200">
                  Rede de fornecedores qualificados e controle de qualidade no maior mercado produtor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça Nossa Equipe Especializada
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Profissionais experientes dedicados ao sucesso da sua importação
          </p>
          <Link
            to="/equipe"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Conhecer Equipe
          </Link>
        </div>
      </section>
    </div>
  );
}
