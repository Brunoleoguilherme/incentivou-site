import Image from 'next/image';
import Link from 'next/link';

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
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <HeroHome />

      <ValueStrip />

      <section className="section homePlatformPreview">
        <div className="container homePlatformGrid">
          <div className="homePlatformText">
            <span className="premiumEyebrow">
              INCENTIVOU MANAGER
            </span>

            <h2>
              A inteligência operacional por trás da
              <strong> Lei de Incentivo.</strong>
            </h2>

            <p>
              Uma plataforma criada para empresas, executores e equipe interna
              acompanharem projetos, documentos, prazos, incentivos, relatórios
              e prestação de contas em um só lugar.
            </p>

            <Link className="btn primary" href="/plataforma">
              Conhecer a plataforma
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="homePlatformImage">
            <Image
              src="/images/dashboard-empresa.png"
              alt="Dashboard IncentiVou Manager"
              width={1600}
              height={1000}
              priority
            />
          </div>
        </div>
      </section>

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
                  <h3>Solução integrada</h3>
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