'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowRight,
  Menu,
  X,
  Globe,
} from 'lucide-react';

import { useState } from 'react';

const nav = [
  { href: '/', label: 'Início' },
  { href: '/solucoes', label: 'Soluções' },
  { href: '/empresas', label: 'Para Empresas' },
  { href: '/executores', label: 'Para Executores' },
  { href: '/plataforma', label: 'Plataforma' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/blog', label: 'Conteúdo' },
];

export function Logo() {
  return (
    <Link href="/" className="logo">
  <Image
    src="/images/incentivou_logo_transparente.png"
    alt="IncentiVou"
    width={520}
    height={180}  
    priority
  />
</Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <Logo />

        <nav className="menu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="cta" href="/contato">
          Fale com um especialista
          <ArrowRight size={17} />
        </Link>

        <button
          className="mobileBtn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="container" style={{ paddingBottom: 18 }}>
          <div className="panel" style={{ padding: 18 }}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '12px 4px',
                  fontWeight: 850,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Logo />

          <p>
            A plataforma inteligente da Lei de Incentivo ao Esporte.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 14,
              marginTop: 18,
              alignItems: 'center',
              color: 'var(--blue)',
            }}
          >
            <span style={{ fontWeight: 900 }}>in</span>

            <span style={{ fontWeight: 900 }}>ig</span>

            <Globe size={20} />

            <span style={{ fontWeight: 900 }}>yt</span>
          </div>
        </div>

        <div>
          <h4>Soluções</h4>

          <Link href="/solucoes#plano-start">
            Plano Start
          </Link>

          <Link href="/solucoes#projeto-aprovado">
            Projeto Aprovado
          </Link>

          <Link href="/solucoes#captacao-inteligente">
            Captação Inteligente
          </Link>

          <Link href="/solucoes#execucao-segura">
            Execução Segura
          </Link>
        </div>

        <div>
          <h4>Para Empresas</h4>

          <Link href="/empresas">
            Como funciona
          </Link>

          <Link href="/empresas#beneficios">
            Benefícios fiscais
          </Link>

          <Link href="/plataforma#marketplace">
            Marketplace
          </Link>

          <Link href="/contato">
            Simular incentivo
          </Link>
        </div>

        <div>
          <h4>Para Executores</h4>

          <Link href="/executores">
            Como funciona
          </Link>

          <Link href="/solucoes">
            Aprovação
          </Link>

          <Link href="/solucoes">
            Captação
          </Link>

          <Link href="/solucoes">
            Prestação de contas
          </Link>
        </div>

        <div>
          <h4>Institucional</h4>

          <Link href="/sobre">
            Sobre nós
          </Link>

          <Link href="/blog">
            Conteúdo
          </Link>

          <Link href="/contato">
            Contato
          </Link>

          <Link href="/politica-de-privacidade">
            Privacidade
          </Link>
        </div>
      </div>

      <div
        className="container"
        style={{
          borderTop: '1px solid var(--line)',
          marginTop: 34,
          paddingTop: 18,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          color: 'var(--muted)',
          fontSize: 13,
        }}
      >
        <span>
          © 2026 IncentiVou. Todos os direitos reservados.
        </span>

        <span>
          <Link href="/politica-de-privacidade">
            Política de Privacidade
          </Link>

          {' · '}

          <Link href="/termos-de-uso">
            Termos de Uso
          </Link>
        </span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  children,
}) {
  return (
    <section className="pageHero">
      <div className="container pageGrid">
        <div>
          <p className="eyebrow">{eyebrow}</p>

          <h1
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />

          <p className="lead">{text}</p>

          <div className="badges">
            <span className="badge">Tecnologia</span>
            <span className="badge">Gestão</span>
            <span className="badge">Compliance</span>
            <span className="badge">Impacto</span>
          </div>
        </div>

        {children || (
          <div className="panel">
            <h2>
              <strong>Incentive</strong> o agora.
            </h2>

            <p
              className="subtitle"
              style={{
                margin: 0,
                textAlign: 'left',
              }}
            >
              Uma experiência digital completa para empresas,
              executores e gestores de projetos incentivados.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section
      className="section"
      style={{ paddingTop: 20 }}
    >
      <div className="container ctaBand">
        <div>
          <h2 style={{ margin: 0 }}>
            O esporte transforma.
            <br />
            A IncentiVou torna isso possível.
          </h2>

          <p
            style={{
              margin: '10px 0 0',
              opacity: 0.9,
            }}
          >
            Tecnologia, estratégia e impacto para um futuro
            melhor.
          </p>
        </div>

        <Link
          className="cta"
          style={{
            background: 'white',
            color: 'var(--green-2)',
          }}
          href="/contato"
        >
          Fale com um especialista
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}