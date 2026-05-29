import { CTA, PageHero } from '@/components/SiteChrome';
import { solutions } from '@/components/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Solucoes() {
  return (
    <main>
      <PageHero
        eyebrow="Soluções IncentiVou"
        title={
          'Tudo que seu projeto precisa para sair do papel e <strong>virar impacto.</strong>'
        }
        text="Produtos pensados para cada momento da jornada: diagnóstico, aprovação, captação, execução e prestação de contas."
      />

      <section className="section">
        <div
          className="container"
          style={{
            display: 'grid',
            gap: 26,
          }}
        >
          {solutions.map(
            (
              {
                icon: Icon,
                color,
                title,
                subtitle,
                text,
                slug,
              },
              i
            ) => (
              <article
                id={slug}
                className="panel"
                key={slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr',
                  gap: 22,
                }}
              >
                <div
                  className="icon"
                  style={{
                    background: color,
                    width: 72,
                    height: 72,
                  }}
                >
                  <Icon size={34} />
                </div>

                <div>
                  <p className="eyebrow">
                    Solução {String(i + 1).padStart(2, '0')}
                  </p>

                  <h2 style={{ fontSize: 38 }}>
                    {title}
                  </h2>

                  <h3>{subtitle}</h3>

                  <p
                    className="lead"
                    style={{ fontSize: 17 }}
                  >
                    {text}
                  </p>

                  <ul className="clean">
  {(title === 'Plano Start') && (
    <>
      <li>
        <CheckCircle2 color="var(--green-2)" />
        Entendimento do potencial do projeto
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Mapeamento de riscos e adequações documentais
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Direcionamento inicial com clareza
      </li>
    </>
  )}

  {(title === 'Projeto Aprovado') && (
    <>
      <li>
        <CheckCircle2 color="var(--green-2)" />
        Estruturação profissional do projeto
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Adequação às exigências legais
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Projeto pronto para protocolo
      </li>
    </>
  )}

  {(title === 'Captação Inteligente') && (
    <>
      <li>
        <CheckCircle2 color="var(--green-2)" />
        Posicionamento atrativo para patrocinadores
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Networking com potenciais apoiadores
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Construção de parcerias sustentáveis
      </li>
    </>
  )}

  {(title === 'Execução Segura') && (
    <>
      <li>
        <CheckCircle2 color="var(--green-2)" />
        Acompanhamento técnico especializado
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Controle operacional e documental
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Segurança durante toda execução
      </li>
    </>
  )}

  {(title === 'Esporte 360') && (
    <>
      <li>
        <CheckCircle2 color="var(--green-2)" />
        Solução completa em um só lugar
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Planejamento, captação e execução integrados
      </li>

      <li>
        <CheckCircle2 color="var(--green-2)" />
        Eficiência em todo o ciclo do projeto
      </li>
    </>
  )}
</ul>

                  <Link
                    className="btn primary"
                    href="/contato"
                  >
                    Quero esta solução
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
}