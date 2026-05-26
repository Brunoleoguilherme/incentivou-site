import { PageHero } from '@/components/SiteChrome';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contato() {
  return <main>
    <PageHero eyebrow="Contato" title={'Vamos descobrir como a IncentiVou pode ajudar <strong>seu próximo projeto.</strong>'} text="Preencha o formulário e nossa equipe fará o primeiro diagnóstico para indicar o melhor caminho." />
    <section className="section"><div className="container split"><div className="panel"><h2 style={{ fontSize:36 }}>Fale com a IncentiVou</h2><p className="lead" style={{ fontSize:17 }}>Conte se você é empresa, executor ou parceiro. Vamos direcionar a conversa para o produto ideal.</p><ul className="clean"><li><Mail color="var(--blue)"/> ester@incentivou.com.br</li><li><MessageCircle color="var(--green-2)"/> (31) 9 9266-2943</li><li><MapPin color="var(--orange)"/> Atendimento nacional</li></ul></div><ContactForm /></div></section>
  </main>;
}
