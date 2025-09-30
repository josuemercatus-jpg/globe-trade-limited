export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Política de Privacidade
          </h1>
          <p className="text-xl text-blue-100">
            Última atualização: Dezembro de 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Informações que Coletamos
            </h2>
            <p className="text-gray-700 mb-6">
              A Globe Trade Limited coleta informações que você nos fornece diretamente, 
              como quando preenche nossos formulários de contato, solicita cotações ou 
              entra em contato conosco por e-mail ou telefone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Dados Pessoais Coletados:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Nome da empresa</li>
              <li>Informações sobre produtos de interesse</li>
              <li>Mensagens e comunicações</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Como Utilizamos suas Informações
            </h2>
            <p className="text-gray-700 mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Responder às suas solicitações e fornecer cotações</li>
              <li>Prestar nossos serviços de assessoria de importação</li>
              <li>Comunicar-nos com você sobre nossos serviços</li>
              <li>Melhorar nossos serviços e atendimento</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 mb-6">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
              exceto quando necessário para prestar nossos serviços (como fornecedores e 
              transportadoras) ou quando exigido por lei.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Segurança dos Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
              proteger suas informações pessoais contra acesso não autorizado, alteração, 
              divulgação ou destruição.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Seus Direitos
            </h2>
            <p className="text-gray-700 mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir informações incorretas</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
              <li>Receber informações sobre o tratamento de seus dados</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Retenção de Dados
            </h2>
            <p className="text-gray-700 mb-6">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
              os propósitos descritos nesta política, a menos que um período de retenção 
              mais longo seja exigido ou permitido por lei.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Cookies e Tecnologias Similares
            </h2>
            <p className="text-gray-700 mb-6">
              Nosso site pode usar cookies e tecnologias similares para melhorar sua 
              experiência de navegação e analisar o uso do site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Alterações na Política
            </h2>
            <p className="text-gray-700 mb-6">
              Podemos atualizar esta política de privacidade periodicamente. Notificaremos 
              sobre mudanças significativas publicando a nova política em nosso site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Contato
            </h2>
            <p className="text-gray-700 mb-4">
              Para questões sobre esta política de privacidade ou sobre o tratamento 
              de seus dados pessoais, entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Globe Trade Limited</strong>
              </p>
              <p className="text-gray-700 mb-2">
                27 Old Gloucester Street, WC1N 3AX, London, UK
              </p>
              <p className="text-gray-700 mb-2">
                Company number: 13001276
              </p>
              <p className="text-gray-700">
                E-mail: contato@globetrade.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
