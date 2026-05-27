'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowRight,
  Building2,
  Check,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';

import {
  solutions,
  platformFeatures,
  empresaItems,
  executorItems,
} from './data';

export function DashboardMockup() {
  return (
    <div className="premiumSystem">
      <div className="simulatorOnlyHeader">
        <span>Simulação Inteligente</span>
        <h3>Simule seu potencial</h3>
        <p>
          Escolha seu perfil e descubra rapidamente oportunidades, riscos e potencial dentro da Lei de Incentivo.
        </p>
      </div>

      <div className="simulatorProfileGrid">
        <Link href="/empresas#simulador-empresa"
  className="profileSimCard empresaSimCard">
          <small>Para empresas</small>
          <strong>Quanto posso incentivar?</strong>
          <p>
            Calcule o potencial de destinação fiscal e encontre projetos alinhados ao seu posicionamento.
          </p>
          <span>
            Simular como empresa <ArrowRight size={16} />
          </span>
        </Link>

        <Link href="/simulador#executores" className="profileSimCard executorSimCard">
          <small>Para executores</small>
          <strong>Meu projeto está apto?</strong>
          <p>
            Faça um diagnóstico inicial da sua organização, documentação e potencial de aprovação/captação.
          </p>
          <span>
            Simular como executor <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export function HeroHome() {
  return (
    <section className="hero">
      <div className="container heroGrid">
        <div>
          <p className="eyebrow">Lei de Incentivo ao Esporte</p>

          <h1>
            Transformamos imposto em{' '}
            <strong>impacto esportivo.</strong>
          </h1>

          <p className="lead">
            Tecnologia, estratégia e gestão completa para projetos esportivos
            captarem, executarem e gerarem impacto real na sociedade.
          </p>

          <div className="actions">
            <Link className="btn primary" href="/empresas">
              Quero incentivar <ArrowRight size={17} />
            </Link>

            <Link className="btn secondary" href="/executores">
              Sou executor de projeto
            </Link>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

export function ValueStrip() {
  return (
    <div className="strip">
      <div className="container stripGrid">
        <div className="stripItem">Tecnologia</div>
        <div className="stripItem">Inteligência</div>
        <div className="stripItem">Gestão</div>
        <div className="stripItem">Impacto</div>
      </div>
    </div>
  );
}

export function SolutionsCards() {
  return (
    <section className="section center">
      <div className="container">
        <h2>Soluções <strong>integradas</strong> para cada etapa do projeto</h2>

        <p className="subtitle">
          Da primeira análise até a prestação de contas, a IncentiVou organiza
          todo o ciclo da Lei de Incentivo com processo, tecnologia e segurança técnica.
        </p>

        <div className="cards">
          {solutions.map(({ icon: Icon, color, title, subtitle, text, href }) => (
            <article className="card" key={title}>
              <div className="icon" style={{ background: color }}>
                <Icon />
              </div>

              <h3 style={{ color }}>{title}</h3>
              <b>{subtitle}</b>
              <p>{text}</p>

              <Link href={href}>
                Saiba mais <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audiences() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container split">

        {/* EMPRESAS */}
        <div className="panel blue">
          <h2 style={{ fontSize: 32 }}>
            Para <strong>Empresas</strong>
          </h2>

          <p>
            Incentivar nunca foi tão estratégico.
          </p>

          <ul className="clean">
            {empresaItems.map((item) => (
              <li key={item}>
                <Check color="var(--blue)" /> {item}
              </li>
            ))}
          </ul>

          <Link className="btn secondary" href="/empresas">
            Sou uma empresa
          </Link>
        </div>

        {/* EXECUTORES */}
        <div className="panel">
          <h2 style={{ fontSize: 32 }}>
            Para <strong>Executores/Proponentes</strong>
          </h2>

          <p>
            Apoiamos Associações, Institutos, Ong&apos;s em seus projetos.
          </p>

          <ul className="clean">
            {executorItems.map((item) => (
              <li key={item}>
                <Check color="var(--green-2)" /> {item}
              </li>
            ))}
          </ul>

          <Link className="btn secondary" href="/executores">
            Sou executor de projeto
          </Link>
        </div>

      </div>
    </section>
  );
}

export function PlatformSummary() {
  return (
    <section className="section center" style={{ paddingTop: 10 }}>
      <div className="container">
        <h2>Plataforma <strong>inteligente</strong> que gera resultados</h2>

        <div className="featureGrid">
          {platformFeatures.map(({ icon: Icon, title, text }) => (
            <div className="feature" key={title}>
              <Icon size={34} />
              <b>{title}</b>
              <p style={{ color: 'var(--muted)', fontSize: 14 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}