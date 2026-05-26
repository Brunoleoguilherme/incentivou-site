import { Rocket, FileCheck2, Handshake, ShieldCheck, Trophy, Brain, Store, Calculator, Bell, BarChart3, Users, Building2, Target, ClipboardCheck, Scale } from 'lucide-react';

export const solutions = [
  { slug: 'plano-start', icon: Rocket, color: 'var(--green)', title: 'Plano Start', subtitle: 'Esporte Incentivado', text: 'Diagnóstico completo para saber se sua organização ou ideia está apta à Lei de Incentivo.', href: '/solucoes#plano-start' },
  { slug: 'projeto-aprovado', icon: FileCheck2, color: 'var(--blue)', title: 'Projeto Aprovado', subtitle: 'Do conceito à aprovação', text: 'Elaboração completa do projeto com segurança técnica e legal para aprovação nos órgãos competentes.', href: '/solucoes#projeto-aprovado' },
  { slug: 'captacao-inteligente', icon: Handshake, color: 'var(--purple)', title: 'Captação Inteligente', subtitle: 'Transformamos imposto em patrocínio', text: 'Estratégias e conexões para aproximar seu projeto das empresas certas.', href: '/solucoes#captacao-inteligente' },
  { slug: 'execucao-segura', icon: ShieldCheck, color: 'var(--orange)', title: 'Execução Segura', subtitle: 'Gestão técnica que protege seu projeto', text: 'Acompanhamento técnico para uma execução eficiente, documentada e sem riscos.', href: '/solucoes#execucao-segura' },
  { slug: 'esporte-360', icon: Trophy, color: 'var(--green-2)', title: 'Esporte 360°', subtitle: 'Solução completa do início ao fim', text: 'Assessoria integral em todo o ciclo do projeto, até a prestação de contas.', href: '/solucoes#esporte-360' },
];

export const platformFeatures = [
  { icon: Brain, title: 'Matchmaking', text: 'Conectamos o projeto ideal à empresa certa.' },
  { icon: Store, title: 'Marketplace', text: 'Encontre ou divulgue projetos esportivos.' },
  { icon: Calculator, title: 'Simuladores', text: 'Calcule, simule e descubra seu potencial.' },
  { icon: Target, title: 'IA & Dados', text: 'Inteligência para prever, recomendar e proteger.' },
  { icon: Bell, title: 'Alertas Inteligentes', text: 'Prazos, oportunidades e riscos na palma da mão.' },
  { icon: BarChart3, title: 'Relatórios ESG', text: 'Impacto real com dados auditáveis.' },
];

export const empresaItems = [
  'Calcule seu potencial de incentivo',
  'Deduza até 4% do IR devido',
  'Fortaleça sua marca com impacto real',
  'Relatórios ESG e de impacto personalizados',
  'Marketplace com projetos alinhados ao seu perfil',
];

export const executorItems = [
  'Avaliação técnica da sua organização',
  'Aprovação do projeto com segurança',
  'Apoio estratégico na captação',
  'Gestão da execução e prestação de contas',
  'Mais tempo para o que realmente importa',
];

export const flows = [
  { title: 'Plano Start', steps: ['Primeiro contato', 'Formulário de diagnóstico', 'Análise prévia', 'Reunião técnica', 'Checklist legal', 'Parecer técnico', 'Recomendação final'] },
  { title: 'Projeto Aprovado', steps: ['Contrato assinado', 'Reunião de alinhamento', 'Roteiro técnico', 'Coleta de conteúdo', 'Redação técnica', 'Checklist legal e orçamentário', 'Validação do cliente', 'Inserção no sistema', 'Submissão'] },
  { title: 'Captação Inteligente', steps: ['Projeto aprovado', 'Análise do projeto', 'Perfil de empresa ideal', 'Plano de captação', 'Apresentação comercial', 'Orientações registradas', 'Acompanhamento'] },
  { title: 'Execução Segura', steps: ['Recurso liberado', 'Kick-off', 'Manual de execução', 'Checklist mensal', 'Registro de orientações', 'Monitoramento contínuo'] },
];

export const posts = [
  { title: 'Como transformar imposto em impacto esportivo', tag: 'Empresas', text: 'Entenda como empresas podem usar incentivos fiscais para apoiar projetos esportivos com retorno institucional.' },
  { title: 'Checklist básico para projetos de esporte incentivado', tag: 'Executores', text: 'Os principais pontos jurídicos, fiscais e técnicos para saber se sua entidade está pronta.' },
  { title: 'Por que a prestação de contas começa no primeiro dia', tag: 'Compliance', text: 'A execução segura depende de documentação, processo e rastreabilidade desde o início.' },
];
