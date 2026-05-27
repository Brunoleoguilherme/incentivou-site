import Image from 'next/image';

import {
  Award,
  Building2,
  CheckCircle2,
  Lightbulb,
  Target,
} from 'lucide-react';

export default function Sobre() {
  const cards = [
    { Icon: Target, t: 'Estratégia', d: 'Visão comercial e técnica para cada cliente.' },
    { Icon: Building2, t: 'Institucional', d: 'Comunicação adequada para empresas e governo.' },
    { Icon: Award, t: 'Especialização', d: 'Conhecimento prático de incentivo ao esporte.' },
    { Icon: Lightbulb, t: 'Processo', d: 'Padronização para evitar falhas e retrabalho.' },
  ];

  return (
    <main>
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">Sobre a IncentiVou</p>

          <h1>
            Especialistas em transformar burocracia em{' '}
            <strong>processo, tecnologia e impacto.</strong>
          </h1>

          <p
            className="lead"
            style={{
              maxWidth: '100%',
              width: '100%',
              fontSize: '22px',
              lineHeight: 1.6,
            }}
          >
            A IncentiVou simplifica a jornada da Lei de Incentivo ao Esporte com tecnologia, estratégia e conhecimento técnico aplicado.
          </p>

          <div className="badges">
            <span className="badge">Tecnologia</span>
            <span className="badge">Gestão</span>
            <span className="badge">Compliance</span>
            <span className="badge">Impacto</span>
          </div>
        </div>
      </section>

      <section className="section">
  <div className="container split">
    <div>
      <h2>
        Uma GovTech esportiva para o mercado de incentivo.
      </h2>

      <p className="lead">
        A IncentiVou combina experiência real em projetos esportivos,
        captação, execução e conhecimento técnico de políticas públicas
        para atender empresas, OSCs e executores com segurança.
      </p>

      <p className="lead">
        Nosso diferencial está em uma equipe de especialistas com anos
        de atuação no mercado, preparada para cuidar de forma personalizada,
        clara e descomplicada de cada etapa do processo.
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

        <li>
          <CheckCircle2 color="var(--green-2)" />
          Atendimento consultivo e personalizado em todas as fases
        </li>
      </ul>
    </div>

    <div className="panel">
      <Image
        src="/images/ester-apresentacao.jpeg"
        alt="Ester - IncentiVou"
        width={900}
        height={1200}
        style={{
          width: '100%',
          height: 420,
          objectFit: 'cover',
          borderRadius: 22,
        }}
      />

      <div className="esterBioCard">
        <span>Especialista IncentiVou</span>

        <h3>Ester</h3>

        <p>
          Especialista em gestão de projetos incentivados, com atuação em
          processos técnicos, organização documental, atendimento a proponentes
          e estruturação de jornadas mais seguras dentro da Lei de Incentivo.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="section" style={{ background: '#f7fbff' }}>
        <div className="container">
          <div className="cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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
    </main>
  );
}