import {
  Audiences,
  HeroHome,
  SolutionsCards,
  ValueStrip,
} from '@/components/HomeBlocks';

import { CTA } from '@/components/SiteChrome';
import EmpresaSimulator from '@/components/EmpresaSimulator';
import ExecutorSimulator from '@/components/ExecutorSimulator';

import {
  Sparkles,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="hero premiumHero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <h1>
              Transformamos imposto em
              <strong> impacto esportivo.</strong>
            </h1>

            <p className="heroLead">
              Tecnologia, estratégia e gestão completa para projetos esportivos
              captarem, executarem e gerarem impacto real na sociedade.
            </p>

            <div className="heroButtons">
              <a href="/empresas" className="btn primary">
                Quero incentivar
              </a>

              <a href="/executores" className="btn secondary">
                Sou executor de projeto
              </a>
            </div>
          </div>

          <div className="heroSimulatorCard">
            <div className="heroSimulatorHeader">
              <span className="premiumEyebrow">
                SIMULAÇÃO INTELIGENTE
              </span>

              <h2>Simule seu potencial</h2>

              <p>
                Escolha seu perfil e descubra rapidamente oportunidades,
                riscos e potencial dentro da Lei de Incentivo.
              </p>
            </div>

            <div className="simulatorGrid premiumGrid">
              <div className="heroSimWrapper">
                <EmpresaSimulator />
              </div>

              <ExecutorSimulator />
            </div>
          </div>
        </div>
      </section>

      <ValueStrip />

      <section className="section">
        <div className="container">
          <div className="simulatorSection premium">
            <div className="homeSimulatorHeader premiumCopy">
              <span className="premiumEyebrow">
                SIMULAÇÃO INTELIGENTE
              </span>

              <h2>
                A plataforma que transforma imposto em
                <strong> impacto esportivo.</strong>
              </h2>

              <p className="premiumLead">
                A IncentiVou moderniza o mercado de incentivo esportivo no Brasil,
                conectando empresas, projetos e executores em um ecossistema de
                tecnologia, estratégia, compliance e captação.
              </p>

              <div className="homeValueCards">
                <div>
                  <span><Sparkles size={21} /></span>

                  <h3>Quem somos</h3>

                  <p>
                    Uma plataforma especializada em Lei de Incentivo ao Esporte,
                    criada para aproximar empresas de projetos com impacto real.
                  </p>
                </div>

                <div>
                  <span><ShieldCheck size={21} /></span>

                  <h3>Nosso diferencial</h3>

                  <p>
                    Unimos consultoria estratégica, tecnologia própria,
                    compliance, curadoria de projetos e mensuração ESG.
                  </p>
                </div>

                <div>
                  <span><Rocket size={21} /></span>

                  <h3>Carro-chefe</h3>

                  <p>
                    Diagnóstico, captação e execução integrada para empresas que
                    querem transformar imposto em reputação, impacto e valor.
                  </p>
                </div>
              </div>
            </div>

            <div className="simulatorGrid premiumGrid">
              <div className="heroSimWrapper">
                <EmpresaSimulator />
              </div>

              <ExecutorSimulator />
            </div>
          </div>
        </div>
      </section>

      <SolutionsCards />

      <Audiences />

      <CTA />
    </main>
  );
}