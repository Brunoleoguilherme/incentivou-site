import { CTA, PageHero } from '@/components/SiteChrome';
import { posts } from '@/components/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  return (
    <main>
      <PageHero
        eyebrow="Conteúdo"
        title={
          'Informação clara para decidir melhor sobre <strong>incentivo fiscal.</strong>'
        }
        text="Guias, checklists e análises para empresas e executores entenderem melhor a Lei de Incentivo ao Esporte."
      />

      <section className="section">
        <div className="container blogGrid">
          {posts.map((post) => (
            <article className="blogCard" key={post.title}>
              <span className="blogCardCategory">
                {post.tag}
              </span>

              <h3>{post.title}</h3>

              <p>{post.text}</p>

              <Link className="blogCardLink" href="/contato">
                Falar com especialista
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}