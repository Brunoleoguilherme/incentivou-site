import { PageHero } from '@/components/SiteChrome';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const posts = [
  {
    slug: 'como-transformar-imposto-em-impacto-esportivo',
    tag: 'Empresas',
    title: 'Como transformar imposto em impacto esportivo',
    text: 'Entenda como empresas podem usar incentivos fiscais para apoiar projetos esportivos com retorno institucional.',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'checklist-projeto-esporte-incentivado',
    tag: 'Executores',
    title: 'Checklist básico para projetos de esporte incentivado',
    text: 'Os principais pontos jurídicos, fiscais e técnicos para saber se sua entidade está pronta.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'prestacao-de-contas-comeca-no-primeiro-dia',
    tag: 'Compliance',
    title: 'Por que a prestação de contas começa no primeiro dia',
    text: 'A execução segura depende de documentação, processo e rastreabilidade desde o início.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <main>
      <PageHero
  eyebrow="Conteúdo"
  title="Informação clara para decidir melhor sobre <strong>incentivo fiscal.</strong>"
  text="Guias, checklists e análises para empresas e executores entenderem melhor a Lei de Incentivo ao Esporte."
  hideCard
/>

      <section className="section">
        <div className="container blogPremiumGrid">
          {posts.map((post) => (
            <article className="blogPremiumCard" key={post.slug}>
              <div className="blogPremiumImageWrap">
                <img src={post.image} alt={post.title} className="blogPremiumImage" />
              </div>

              <div className="blogPremiumContent">
                <span className="blogPremiumTag">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.text}</p>

                <Link href={`/blog/${post.slug}`} className="blogPremiumLink">
                  Ler matéria <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section blogSocialSection">
        <div className="container">
          <div className="blogSocialPremium">
            <h2>Nos acompanhe em nossos canais oficiais</h2>

            <div className="blogSocialButtons">
              <a href="https://www.instagram.com/incentivou.br/" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>

              <a href="https://www.facebook.com/profile.php?id=61590598790399" target="_blank" rel="noreferrer">
                <FaFacebookF /> Facebook
              </a>

              <a href="https://wa.me/" target="_blank" rel="noreferrer">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}