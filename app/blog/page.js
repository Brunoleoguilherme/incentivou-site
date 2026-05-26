import { CTA, PageHero } from '@/components/SiteChrome';
import { posts } from '@/components/data';
import Link from 'next/link';

export default function Blog() {
  return <main>
    <PageHero eyebrow="Conteúdo" title={'Informação clara para decidir melhor sobre <strong>incentivo fiscal.</strong>'} text="Guias, checklists e análises para empresas e executores entenderem melhor a Lei de Incentivo ao Esporte." />
    <section className="section"><div className="container blogGrid">{posts.map(p => <article className="card article" key={p.title}><span className="badge">{p.tag}</span><h3 style={{ marginTop:18 }}>{p.title}</h3><p>{p.text}</p><Link href="/contato" style={{ color:'var(--green-2)', fontWeight:900 }}>Falar com especialista</Link></article>)}</div></section>
    <CTA />
  </main>;
}
