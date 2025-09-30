import { User, Award, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

export default function Team() {
  const teamMembers = [
    {
      name: "Josue Joaquim de Medeiros",
      role: "Fundador",
      image: "https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/foto-pequena.jpg",
      experience: "Experiência desde 2009 em comércio exterior",
      description: "Líder visionário com mais de 15 anos de experiência em comércio internacional. Especialista em múltiplos segmentos, coordena estratégias globais e desenvolvimento de novos mercados.",
      expertise: [
        "Estratégia de negócios internacionais",
        "Desenvolvimento de mercados",
        "Gestão de fornecedores globais",
        "Análise de oportunidades comerciais"
      ],
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      name: "Luciane Cristina Panini",
      role: "Diretora Operacional",
      image: "https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/luciane-despachante.jpg",
      experience: "Despachante aduaneira, MBA em Logística e Supply Chain",
      description: "Especialista em operações aduaneiras e logística internacional. Responsável por garantir a eficiência e conformidade de todos os processos operacionais da empresa.",
      expertise: [
        "Desembaraço aduaneiro",
        "Logística internacional",
        "Gestão de supply chain",
        "Conformidade regulatória"
      ],
      icon: <Award className="h-6 w-6" />
    },
    {
      name: "Dr. Luciano Bushatsky",
      role: "Advogado Especialista",
      image: "https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/dr-Luciano.jpg",
      experience: "Especialista em Direito Aduaneiro, Vice-Diretor da ABEAD/PE",
      description: "Renomado especialista em direito aduaneiro e autor de publicações na área. Garante segurança jurídica em todas as operações e mantém a empresa atualizada com as regulamentações.",
      expertise: [
        "Direito aduaneiro",
        "Consultoria jurídica especializada",
        "Compliance regulatório",
        "Resolução de questões alfandegárias"
      ],
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      name: "Kielson Dias do Prado",
      role: "Diretor de Negócios",
      image: "https://mocha-cdn.com/019995e2-529e-7c98-9493-68481192f825/Kielson.jpg",
      experience: "Experiência em compliance documental, formação multidisciplinar",
      description: "Especialista em compliance e desenvolvimento de negócios. Responsável por assegurar a conformidade documental e expandir as oportunidades comerciais da empresa.",
      expertise: [
        "Compliance documental",
        "Desenvolvimento de negócios",
        "Análise de riscos",
        "Gestão de relacionamento com clientes"
      ],
      icon: <User className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa Equipe Especializada
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Profissionais experientes e dedicados, prontos para tornar sua importação um sucesso
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {member.icon}
                        <h3 className="text-2xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                      </div>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-gray-600 mb-4 font-medium">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Áreas de Especialização:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experiência Comprovada
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Nossa equipe reúne décadas de experiência em comércio exterior e direito aduaneiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Anos de experiência combinada</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Processos de importação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-200">Países de atuação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Suporte especializado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nosso Compromisso
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cada membro da nossa equipe está comprometido em oferecer excelência em cada etapa 
              do processo de importação. Combinamos conhecimento técnico, experiência prática e 
              dedicação pessoal para garantir o sucesso dos nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excelência Técnica
              </h3>
              <p className="text-gray-600">
                Conhecimento profundo das regulamentações e melhores práticas do mercado
              </p>
            </div>
            <div className="text-center p-6">
              <User className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Cada cliente recebe atenção dedicada e soluções adaptadas às suas necessidades
              </p>
            </div>
            <div className="text-center p-6">
              <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Resultados Garantidos
              </h3>
              <p className="text-gray-600">
                Compromisso com a entrega de resultados concretos e mensuráveis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pronto para trabalhar com nossa equipe?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como nossa experiência pode acelerar seus resultados
          </p>
          <Link
            to="/contato"
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Falar com a Equipe
          </Link>
        </div>
      </section>
    </div>
  );
}
