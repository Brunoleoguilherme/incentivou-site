import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const posts = {
  'como-transformar-imposto-em-impacto-esportivo': {
    title: 'Como transformar imposto em impacto esportivo',
    category: 'Empresas',
    content: `
A Lei de Incentivo ao Esporte permite que empresas direcionem parte do imposto devido para apoiar projetos esportivos aprovados pelo Governo Federal.

Além do benefício fiscal, empresas passam a gerar impacto social, fortalecimento institucional e posicionamento de marca.

Projetos esportivos oferecem oportunidades reais de relacionamento com comunidades, ESG, ativações de marca e transformação social.

Com estratégia correta, o incentivo deixa de ser apenas obrigação tributária e se torna investimento institucional.
`,
  },

  'checklist-projeto-esporte-incentivado': {
    title: 'Checklist básico para projetos de esporte incentivado',
    category: 'Executores',
    content: `
Antes de submeter um projeto esportivo, é fundamental garantir regularidade documental, técnica e institucional.

Os principais pontos avaliados incluem:

- Estatuto atualizado
- Certidões negativas
- Capacidade técnica
- Plano de trabalho
- Orçamento coerente
- Estratégia de execução
- Plano de captação

Organizações preparadas possuem muito mais chance de aprovação e captação.
`,
  },

  'prestacao-de-contas-comeca-no-primeiro-dia': {
    title: 'Por que a prestação de contas começa no primeiro dia',
    category: 'Compliance',
    content: `
Um dos maiores erros dos projetos incentivados é deixar a prestação de contas apenas para o final.

A execução segura depende de:

- Organização documental
- Controle financeiro
- Registro de pagamentos
- Evidências das entregas
- Relatórios periódicos
- Monitoramento técnico

Quando o projeto nasce organizado, a prestação de contas se torna muito mais simples e segura.
`,
  },
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return <div>Matéria não encontrada.</div>;
  }

  return (
    <main className="section">
      <div className="container blogPostContainer">
        <Link href="/blog" className="blogBackLink">
          <ArrowLeft size={18} />
          Voltar para o blog
        </Link>

        <span className="blogPostTag">
          {post.category}
        </span>

        <h1>{post.title}</h1>

        <article className="blogPostContent">
          {post.content
            .trim()
            .split('\n')
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </article>
      </div>
    </main>
  );
}