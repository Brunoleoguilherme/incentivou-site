import { CTA, PageHero } from '@/components/SiteChrome';
import { flows, solutions } from '@/components/data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Solucoes() {
  return <main>
    <PageHero eyebrow="Soluções IncentiVou" title={'Tudo que seu projeto precisa para sair do papel e <strong>virar impacto.</strong>'} text="Produtos pensados para cada momento da jornada: diagnóstico, aprovação, captação, execução e prestação de contas." />
    <section className="section"><div className="container" style={{ display:'grid', gap:26 }}>
      {solutions.map(({ icon: Icon, color, title, subtitle, text, slug }, i) => <article id={slug} className="panel" key={slug} style={{ display:'grid', gridTemplateColumns:'90px 1fr', gap:22 }}><div className="icon" style={{ background: color, width:72, height:72 }}><Icon size={34}/></div><div><p className="eyebrow">Solução {String(i+1).padStart(2,'0')}</p><h2 style={{ fontSize:38 }}>{title}</h2><h3>{subtitle}</h3><p className="lead" style={{ fontSize:17 }}>{text}</p><ul className="clean"><li><CheckCircle2 color="var(--green-2)"/> Processo técnico documentado</li><li><CheckCircle2 color="var(--green-2)"/> Segurança jurídica e operacional</li><li><CheckCircle2 color="var(--green-2)"/> Próximos passos claros para o cliente</li></ul><Link className="btn primary" href="/contato">Quero esta solução <ArrowRight size={17}/></Link></div></article>)}
    </div></section>
    <section className="section" style={{ background:'#f7fbff' }}><div className="container"><div className="center"><h2>Fluxos operacionais <strong>padronizados</strong></h2><p className="subtitle">Cada produto possui uma sequência clara para proteger tecnicamente a operação e garantir rastreabilidade.</p></div><div className="split">{flows.map((flow) => <div className="panel" key={flow.title}><h3>{flow.title}</h3><div className="timeline">{flow.steps.map((s, i) => <div className="step" key={s}><div className="num">{i+1}</div><div><b>{s}</b><p style={{ color:'var(--muted)', margin:'6px 0 0' }}>Etapa registrada no dossiê único do projeto.</p></div></div>)}</div></div>)}</div></div></section>
    <CTA />
  </main>;
}
