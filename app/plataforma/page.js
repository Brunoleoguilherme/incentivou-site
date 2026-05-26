import { DashboardMockup } from '@/components/HomeBlocks';
import { CTA, PageHero } from '@/components/SiteChrome';
import { platformFeatures } from '@/components/data';

export default function Plataforma() {
  return <main>
    <PageHero eyebrow="IncentiVou Manager" title={'A inteligência operacional por trás da <strong>Lei de Incentivo.</strong>'} text="Um sistema pensado para empresas, executores e equipe interna acompanharem todo o ciclo do projeto com dados, alertas e documentos centralizados."><DashboardMockup /></PageHero>
    <section className="section"><div className="container"><div className="center"><h2>Funcionalidades da plataforma</h2><p className="subtitle">O sistema foi desenhado para reduzir troca de mensagens, organizar documentos e gerar decisões melhores.</p></div><div className="cards" style={{ gridTemplateColumns:'repeat(3,1fr)' }}>{platformFeatures.map(({icon:Icon,title,text}) => <div className="card" key={title}><div className="icon"><Icon/></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="section" style={{ background:'#f7fbff' }}><div className="container split"><div className="panel"><h2 style={{ fontSize:36 }}>Acesso da equipe</h2><p>Gestão geral de projetos, empresas, pipeline de captação, CRM de incentivo, contatos, histórico de negociação, comissões e dashboard de performance.</p></div><div className="panel"><h2 style={{ fontSize:36 }}>Compliance e segurança</h2><p>Trilha de auditoria, validação documental, controle de acesso, alertas de prazo e dossiê único do projeto.</p></div></div></section>
    <CTA />
  </main>;
}
