import { PageHero } from '@/components/SiteChrome';
import { executorItems } from '@/components/data';
import ExecutorSimulator from '@/components/ExecutorSimulator';

import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  FolderKanban,
  ShieldCheck,
} from 'lucide-react';

import Link from 'next/link';

export default function Executores() {
  const recursos = [
    {
      Icon: ClipboardCheck,
      t: 'Aptidão Técnica',
      d: 'Identifique pendências antes da submissão.',
    },
    {
      Icon: FileCheck2,
      t: 'Projeto Aprovado',
      d: 'Documentos e estrutura técnica do projeto.',
    },
    {
      Icon: FolderKanban,
      t: 'Dossiê Único',
      d: 'Histórico e documentos centralizados.',
    },
    {
      Icon: ShieldCheck,
      t: 'Execução Segura',
      d: 'Monitoramento para evitar glosas.',
    },
  ];

  return (
    <main>
      <PageHero
        hideCard
        eyebrow="Para OSCs, clubes e executores"
        title={
          'Seu projeto esportivo com mais chances de <strong>aprovação, captação e execução segura.</strong>'
        }
        text="A IncentiVou organiza o caminho técnico para transformar sua ideia em projeto aprovado, captável e bem executado."
      />

      <section className="section executorPremiumSection">
        <div className="container executorPremiumGrid">
          <div className="panel executorDiagnosticPanel">
            <span className="simBadge green">
              Diagnóstico técnico
            </span>

            <h2>Diagnóstico de aptidão técnica</h2>

            <p>
              O diagnóstico identifica rapidamente se sua organização está pronta
              para aprovar, captar e executar projetos pela Lei de Incentivo ao
              Esporte com mais segurança.
            </p>

            <div className="executorCopyBox">
              <strong>Evite retrabalho, atrasos e reprovações.</strong>

              <p>
                Analisamos documentação, regularidade, estrutura técnica e
                capacidade de execução para indicar os próximos passos com
                clareza.
              </p>
            </div>

            <div className="executorCopyHighlight">
              <strong>Resultado prático:</strong>
              um mapa de aptidão com riscos, pendências e oportunidades para
              transformar sua ideia em projeto captável.
            </div>

            <ul className="clean">
              {executorItems.map((item) => (
                <li key={item}>
                  <Check color="var(--green-2)" /> {item}
                </li>
              ))}
            </ul>

            <Link className="btn primary" href="#simulador-executores">
              Avaliar meu projeto
              <ArrowRight size={17} />
            </Link>
          </div>

          <div id="simulador-executores">
            <ExecutorSimulator />
          </div>
        </div>
      </section>

      <section className="section executorRecursosSection">
        <div className="container">
          <div className="executorRecursosHeader">
            <span className="simBadge green">
              Recursos para proponentes
            </span>

            <h2>
              Estrutura completa para aprovar, captar e executar com segurança.
            </h2>
          </div>

          <div className="cards executorRecursosGrid">
            {recursos.map(({ Icon, t, d }) => (
              <div className="card executorRecursoCard" key={t}>
                <div className="executorRecursoIcon">
                  <Icon size={36} />
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