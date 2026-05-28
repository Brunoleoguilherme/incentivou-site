import { PageHero } from '@/components/SiteChrome';

export default function Privacidade() {
  return (
    <main>
      <PageHero
        hideCard
        eyebrow="Privacidade e LGPD"
        title={
          'Política de <strong>Privacidade</strong> da IncentiVou.'
        }
        text="Entenda como coletamos, utilizamos e protegemos seus dados dentro da plataforma IncentiVou."
      />

      <section className="section">
        <div className="container">
          <div className="privacyPremiumCard">

            <div className="privacySection">
              <h2>1. Introdução</h2>

              <p>
                A IncentiVou valoriza a privacidade, a segurança e a proteção
                dos dados pessoais de seus usuários, clientes, parceiros,
                executores e empresas apoiadoras.
              </p>

              <p>
                Esta Política de Privacidade explica como coletamos,
                armazenamos, utilizamos e protegemos suas informações,
                seguindo os princípios da Lei Geral de Proteção de Dados
                (LGPD — Lei nº 13.709/2018).
              </p>
            </div>

            <div className="privacySection">
              <h2>2. Dados coletados</h2>

              <p>
                Podemos coletar informações fornecidas diretamente pelo usuário,
                incluindo:
              </p>

              <ul>
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone / WhatsApp</li>
                <li>Empresa ou organização</li>
                <li>CNPJ</li>
                <li>Informações relacionadas a projetos incentivados</li>
                <li>Dados de navegação e interação na plataforma</li>
              </ul>
            </div>

            <div className="privacySection">
              <h2>3. Finalidade do uso dos dados</h2>

              <p>Os dados poderão ser utilizados para:</p>

              <ul>
                <li>Responder solicitações e contatos</li>
                <li>Realizar diagnósticos técnicos</li>
                <li>Apresentar soluções da IncentiVou</li>
                <li>Enviar comunicações institucionais</li>
                <li>Melhorar a experiência na plataforma</li>
                <li>Garantir segurança operacional e compliance</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </div>

            <div className="privacySection">
              <h2>4. Compartilhamento de informações</h2>

              <p>
                A IncentiVou não comercializa dados pessoais.
              </p>

              <p>
                Informações poderão ser compartilhadas apenas quando necessário
                para execução de serviços, cumprimento legal, integração com
                parceiros autorizados ou mediante consentimento do usuário.
              </p>
            </div>

            <div className="privacySection">
              <h2>5. Segurança dos dados</h2>

              <p>
                Adotamos medidas técnicas e organizacionais para proteger os
                dados contra acessos não autorizados, vazamentos, alterações,
                destruição ou qualquer tratamento inadequado.
              </p>
            </div>

            <div className="privacySection">
              <h2>6. Direitos do titular</h2>

              <p>
                Nos termos da LGPD, o usuário poderá solicitar:
              </p>

              <ul>
                <li>Confirmação de tratamento de dados</li>
                <li>Acesso às informações armazenadas</li>
                <li>Correção de dados incompletos ou desatualizados</li>
                <li>Revogação de consentimento</li>
                <li>Exclusão de dados, quando aplicável</li>
              </ul>
            </div>

            <div className="privacySection">
              <h2>7. Cookies e navegação</h2>

              <p>
                Utilizamos cookies e tecnologias similares para melhorar a
                navegação, personalizar conteúdos e gerar métricas de uso da
                plataforma.
              </p>
            </div>

            <div className="privacySection">
              <h2>8. Contato</h2>

              <p>
                Em caso de dúvidas relacionadas à privacidade ou proteção de
                dados, entre em contato:
              </p>

              <div className="privacyContactBox">
                <strong>IncentiVou</strong>

                <span>E-mail: ester@incentivou.com.br</span>

                <span>WhatsApp: (31) 9 9266-2943</span>
              </div>
            </div>

            <div className="privacyFooter">
              Última atualização: Maio de 2026
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}