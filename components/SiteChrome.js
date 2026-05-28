'use client';

'use client';

import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowRight,
  Menu,
  X,
  Globe,
} from 'lucide-react';

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa';

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
    <footer className="footer footerPremium">
      <div className="container footerPremiumGrid">
        
        {/* COLUNA LOGO */}
        <div className="footerBrandPremium">
          <Link className="footerLogo" href="/">
            <Image
              src="/images/incentivou_logo_transparente.png"
              alt="IncentiVou"
              width={240}
              height={70}
              priority
            />
          </Link>

          <p>
            Plataforma inteligente para gestão, captação,
            compliance e execução de projetos incentivados.
          </p>

          <div className="footerSocial">
  <a
    href="https://www.linkedin.com/company/incentivou/about/?viewAsMember=true"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={18} />
  </a>

  <a
    href="https://www.instagram.com/incentivou.br/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61590598790399"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube size={18} />
  </a>
</div>
        </div>

        {/* COLUNAS */}
        <div className="footerColumn">
          <h4>Soluções</h4>

          <a href="/solucoes">Plano Start</a>
          <a href="/solucoes">Projeto Aprovado</a>
          <a href="/solucoes">Captação Inteligente</a>
          <a href="/solucoes">Execução Segura</a>
        </div>

        <div className="footerColumn">
          <h4>Para Empresas</h4>

          <a href="/empresas">Como funciona</a>
          <a href="/empresas">Benefícios fiscais</a>
          <a href="/empresas">Marketplace</a>
          <a href="/empresas">Simular incentivo</a>
        </div>

        <div className="footerColumn">
          <h4>Para Executores</h4>

          <a href="/executores">Como funciona</a>
          <a href="/executores">Aprovação</a>
          <a href="/executores">Captação</a>
          <a href="/executores">Prestação de contas</a>
        </div>

        <div className="footerColumn">
          <h4>Institucional</h4>

          <a href="/sobre">Sobre nós</a>
          <a href="/blog">Conteúdo</a>
          <a href="/contato">Contato</a>
          <a href="/privacidade">Privacidade</a>
        </div>
      </div>

      {/* LINHA INFERIOR */}
      <div className="container footerPremiumBottom">
        <p>© 2026 IncentiVou. Todos os direitos reservados.</p>

        <div className="footerBottomLinks">
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, text, children }) {
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

          <p
            className="lead"
            style={{
              maxWidth: '100%',
              width: '100%',
              fontSize: '22px',
              lineHeight: 1.6,
            }}
          >
            {text}
          </p>

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
                maxWidth: '100%',
                width: '100%',
                whiteSpace: 'nowrap',
                fontSize: '20px',
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
    <section className="section" style={{ paddingTop: 20 }}>
      <div className="container ctaBand">
        <div>
          <h2 style={{ margin: 0 }}>
            A Incentivou te ajuda a transformar
            <br />
            o potencial do esporte em grandes resultados.
          </h2>

          <p
            style={{
              margin: '10px 0 0',
              opacity: 0.9,
            }}
          >
            Descomplicamos os processos da Lei de Incentivo.
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