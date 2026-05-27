import Image from 'next/image';
import { CTA } from '@/components/SiteChrome';
import { platformFeatures } from '@/components/data';

export default function Plataforma() {
  return (
    <main>
      <section className="section platformHeroPremium">
        <div className="container platformHeroGrid">
          <div className="platformHeroText">
            <p className="eyebrow">IncentiVou Manager</p>

            <h1>
              A inteligência operacional por trás da{' '}
              <strong>Lei de Incentivo.</strong>
            </h1>

            <p className="lead">
              Um sistema pensado para empresas, executores e equipe interna
              acompanharem todo o ciclo do projeto com dados, alertas e
              documentos centralizados.
            </p>

            <div className="badges">
              <span className="badge">Tecnologia</span>
              <span className="badge">Gestão</span>
              <span className="badge">Compliance</span>
              <span className="badge">Impacto</span>
            </div>
          </div>

          <div className="platformMockupCard">
            <Image
              src="/images/dashboard-empresa.png"
              alt="Dashboard empresa IncentiVou Manager"
              width={1600}
              height={1000}
              className="platformMockupImage"
              priority
            />
          </div>
        </div>

        <div className="container platformSecondMockup">
          <div className="platformMockupCard large">
            <Image
              src="/images/dashboard-executor.png"
              alt="Dashboard executor IncentiVou Manager"
              width={1600}
              height={1000}
              className="platformMockupImage"
            />
          </div>
        </div>
      </section>

      <section className="section platformFeaturesSection">
        <div className="container">
          <div className="center">
            <h2>Funcionalidades da plataforma</h2>

            <p className="subtitle">
              O sistema foi desenhado para reduzir troca de mensagens, organizar
              documentos e gerar decisões melhores.
            </p>
          </div>

          <div className="cards platformFeatureGrid">
            {platformFeatures.map(({ icon: Icon, title, text }) => (
              <div className="card platformFeatureCard" key={title}>
                <div className="platformFeatureIcon">
                  <Icon size={30} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section platformSecuritySection">
        <div className="container split">
          <div className="panel platformInfoPanel">
            <h2>Acesso da equipe</h2>

            <p>
              Gestão geral de projetos, empresas, pipeline de captação, CRM de
              incentivo, contatos, histórico de negociação, comissões e dashboard
              de performance.
            </p>
          </div>

          <div className="panel platformInfoPanel">
            <h2>Compliance e segurança</h2>

            <p>
              Trilha de auditoria, validação documental, controle de acesso,
              alertas de prazo e dossiê único do projeto.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}