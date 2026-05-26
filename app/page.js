import {
  Audiences,
  HeroHome,
  SolutionsCards,
  ValueStrip,
} from '@/components/HomeBlocks';

import { CTA } from '@/components/SiteChrome';

import EmpresaSimulator from '@/components/EmpresaSimulator';
import ExecutorSimulator from '@/components/ExecutorSimulator';

export default function Home() {
  return (
    <main>
      <HeroHome />

      <ValueStrip />

      <section className="section">
        <div className="container">
          <div className="simulatorSection premium">
            <div className="homeSimulatorHeader premiumCopy">
              <span className="eyebrow">
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
                  <span>01</span>
                  <h3>Quem somos</h3>
                  <p>
                    Uma plataforma especializada em Lei de Incentivo ao Esporte,
                    criada para aproximar empresas de projetos com impacto real.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Nosso diferencial</h3>
                  <p>
                    Unimos consultoria estratégica, tecnologia própria, compliance,
                    curadoria de projetos e mensuração ESG em uma única operação.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>Carro-chefe</h3>
                  <p>
                    Diagnóstico, captação e execução integrada para empresas que
                    querem transformar imposto em reputação, impacto e valor institucional.
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