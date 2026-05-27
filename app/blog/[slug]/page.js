import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const posts = {
  'como-transformar-imposto-em-impacto-esportivo': {
    title: 'Como transformar imposto em impacto esportivo',
    category: 'Empresas',
    content: `A Lei de Incentivo ao Esporte permite que empresas direcionem parte do imposto devido para apoiar projetos esportivos aprovados.

Além do benefício fiscal, empresas geram impacto social, fortalecem sua marca e ampliam sua reputação institucional.

Com estratégia correta, o incentivo deixa de ser apenas uma obrigação tributária e se transforma em investimento de marca, ESG e relacionamento com a sociedade.`,
  },
  'checklist-projeto-esporte-incentivado': {
    title: 'Checklist básico para projetos de esporte incentivado',
    category: 'Executores',
    content: `Antes de submeter um projeto esportivo, é essencial garantir regularidade documental, técnica e institucional.

Os principais pontos avaliados são estatuto atualizado, certidões, capacidade técnica, plano de trabalho, orçamento coerente, estratégia de execução e plano de captação.

Organizações preparadas possuem muito mais chance de aprovação e captação.`,
  },
  'prestacao-de-contas-comeca-no-primeiro-dia': {
    title: 'Por que a prestação de contas começa no primeiro dia',
    category: 'Compliance',
    content: `Um dos maiores erros dos projetos incentivados é deixar a prestação de contas apenas para o final.

A execução segura depende de organização documental, controle financeiro, registro de pagamentos, evidências das entregas, relatórios periódicos e monitoramento técnico.

Quando o projeto nasce organizado, a prestação de contas se torna muito mais simples e segura.`,
  },
};

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="section">
        <div className="container blogPostContainer">
          <Link href="/blog" className="blogBackLink">
            <ArrowLeft size={18} />
            Voltar para o blog
          </Link>

          <h1>Matéria não encontrada.</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="section">
      <div className="container blogPostContainer">
        <Link href="/blog" className="blogBackLink">
          <ArrowLeft size={18} />
          Voltar para o blog
        </Link>

        <span className="blogPostTag">{post.category}</span>

        <h1>{post.title}</h1>

        <article className="blogPostContent">
          {post.content
            .trim()
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </article>
      </div>
    </main>
  );
}