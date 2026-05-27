import Image from 'next/image';
import { CTA, PageHero } from '@/components/SiteChrome';

import {
  Award,
  Building2,
  CheckCircle2,
  Lightbulb,
  Target,
} from 'lucide-react';

export default function Sobre() {
  const cards = [
    {
      Icon: Target,
      t: 'Estratégia',
      d: 'Visão comercial e técnica para cada cliente.',
    },
    {
      Icon: Building2,
      t: 'Institucional',
      d: 'Comunicação adequada para empresas e governo.',
    },
    {
      Icon: Award,
      t: 'Especialização',
      d: 'Conhecimento prático de incentivo ao esporte.',
    },
    {
      Icon: Lightbulb,
      t: 'Processo',
      d: 'Padronização para evitar falhas e retrabalho.',
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Sobre a IncentiVou"
        title={
          'Especialistas em transformar burocracia em <strong>processo, tecnologia e impacto.</strong>'
        }
        text="A IncentiVou nasce para simplificar a jornada da Lei de Incentivo ao Esporte, unindo conhecimento técnico, visão comercial e tecnologia aplicada."
      />

      <section className="section">
        <div className="container split">
          <div>
            <h2>
              Uma GovTech esportiva para o mercado de incentivo.
            </h2>

            <p className="lead">
              A marca combina experiência real em projetos esportivos,
              captação, execução e conhecimento técnico de políticas públicas
              para atender empresas, OSCs e executores com segurança.
            </p>

            <ul className="clean">
              <li>
                <CheckCircle2 color="var(--green-2)" />
                Metodologia própria de diagnóstico
              </li>

              <li>
                <CheckCircle2 color="var(--green-2)" />
                Fluxos operacionais padronizados
              </li>

              <li>
                <CheckCircle2 color="var(--green-2)" />
                Plataforma com dados, alertas e documentos
              </li>
            </ul>
          </div>

          <div className="panel">
            <Image
              src="/images/ester-apresentacao.jpeg"
              alt="Apresentação IncentiVou"
              width={900}
              height={1200}
              style={{
                width: '100%',
                height: 420,
                objectFit: 'cover',
                borderRadius: 22,
              }}
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f7fbff' }}>
        <div className="container">
          <div
            className="cards"
            style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {cards.map(({ Icon, t, d }) => (
              <div className="card aboutPremiumCard" key={t}>
                <div className="aboutIcon">
                  <Icon size={30} />
                </div>

                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}