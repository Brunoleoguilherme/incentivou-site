import { CTA, PageHero } from '@/components/SiteChrome';
import { executorItems } from '@/components/data';
import { ArrowRight, Check, ClipboardCheck, FileCheck2, FolderKanban, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Executores() {
  return <main>
    <PageHero eyebrow="Para OSCs, clubes e executores" title={'Seu projeto esportivo com mais chance de <strong>aprovação, captação e execução segura.</strong>'} text="A IncentiVou organiza o caminho técnico para transformar sua ideia em projeto aprovado, captável e bem executado." />
    <section className="section"><div className="container split"><div className="panel"><h2 style={{ fontSize:36 }}>Diagnóstico de aptidão técnica</h2><p>Antes de investir tempo e dinheiro, avaliamos se sua organização está pronta para seguir pela Lei de Incentivo.</p><ul className="clean">{executorItems.map(i => <li key={i}><Check color="var(--green-2)"/> {i}</li>)}</ul><Link className="btn primary" href="/contato">Avaliar meu projeto <ArrowRight size={17}/></Link></div><div className="timeline">{['Regularidade jurídica e fiscal','Capacidade técnica e institucional','Estrutura do projeto e orçamento','Plano de captação e execução'].map((s,i)=><div className="step" key={s}><div className="num">{i+1}</div><div><b>{s}</b><p style={{ color:'var(--muted)' }}>Checklist técnico aplicado ao perfil do proponente.</p></div></div>)}</div></div></section>
    <section className="section" style={{ background:'#f7fbff' }}><div className="container"><div className="cards" style={{ gridTemplateColumns:'repeat(4,1fr)' }}>{[{Icon:ClipboardCheck,t:'Aptidão Técnica',d:'Identifique pendências antes da submissão.'},{Icon:FileCheck2,t:'Projeto Aprovado',d:'Documentos e estrutura técnica do projeto.'},{Icon:FolderKanban,t:'Dossiê Único',d:'Histórico e documentos centralizados.'},{Icon:ShieldCheck,t:'Execução Segura',d:'Monitoramento para evitar glosas.'}].map(({Icon,t,d})=><div className="card" key={t}><div className="icon"><Icon/></div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <CTA />
  </main>;
}
