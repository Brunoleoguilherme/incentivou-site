import { PageHero } from '@/components/SiteChrome';

export default function Termos() {
  return (
    <main>
      <PageHero
        hideCard
        eyebrow="Termos e Condições"
        title={
          'Termos de <strong>Uso</strong> da IncentiVou.'
        }
        text="Leia atentamente as condições gerais para utilização da plataforma IncentiVou."
      />

      <section className="section">
        <div className="container">
          <div className="privacyPremiumCard">

            <div className="privacySection">
              <h2>1. Aceitação dos termos</h2>

              <p>
                Ao acessar ou utilizar a plataforma IncentiVou, o usuário
                concorda integralmente com os presentes Termos de Uso,
                bem como com a Política de Privacidade e demais regras
                aplicáveis.
              </p>
            </div>

            <div className="privacySection">
              <h2>2. Sobre a plataforma</h2>

              <p>
                A IncentiVou é uma plataforma voltada à gestão,
                diagnóstico, captação, compliance e execução de projetos
                relacionados à Lei de Incentivo ao Esporte.
              </p>

              <p>
                Os serviços podem incluir consultoria, diagnósticos
                técnicos, formulários, relatórios, comunicação e
                ferramentas digitais de acompanhamento operacional.
              </p>
            </div>

            <div className="privacySection">
              <h2>3. Responsabilidades do usuário</h2>

              <p>O usuário se compromete a:</p>

              <ul>
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Utilizar a plataforma de forma lícita e ética</li>
                <li>Não tentar acessar áreas restritas sem autorização</li>
                <li>Não utilizar a plataforma para práticas ilegais</li>
                <li>Respeitar direitos autorais e propriedade intelectual</li>
              </ul>
            </div>

            <div className="privacySection">
              <h2>4. Limitação de responsabilidade</h2>

              <p>
                A IncentiVou atua como plataforma de apoio técnico,
                operacional e estratégico, não garantindo aprovação,
                captação de recursos ou resultados específicos.
              </p>

              <p>
                Decisões de órgãos públicos, patrocinadores, empresas ou
                terceiros independem exclusivamente da atuação da plataforma.
              </p>
            </div>

            <div className="privacySection">
              <h2>5. Propriedade intelectual</h2>

              <p>
                Todo o conteúdo da plataforma, incluindo identidade visual,
                textos, tecnologia, layouts, materiais, relatórios e
                sistemas, pertence à IncentiVou ou aos seus respectivos
                licenciadores.
              </p>

              <p>
                É proibida a reprodução, cópia ou utilização sem autorização
                formal.
              </p>
            </div>

            <div className="privacySection">
              <h2>6. Disponibilidade da plataforma</h2>

              <p>
                A IncentiVou poderá realizar atualizações, manutenções,
                melhorias técnicas e alterações operacionais a qualquer
                momento, sem necessidade de aviso prévio.
              </p>
            </div>

            <div className="privacySection">
              <h2>7. Privacidade e proteção de dados</h2>

              <p>
                O tratamento de dados pessoais segue as diretrizes da Lei
                Geral de Proteção de Dados (LGPD) e está detalhado em nossa
                Política de Privacidade.
              </p>
            </div>

            <div className="privacySection">
              <h2>8. Modificações dos termos</h2>

              <p>
                A IncentiVou poderá atualizar estes Termos de Uso sempre que
                necessário para adequação legal, técnica ou operacional.
              </p>
            </div>

            <div className="privacySection">
              <h2>9. Contato</h2>

              <p>
                Em caso de dúvidas sobre estes Termos de Uso:
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