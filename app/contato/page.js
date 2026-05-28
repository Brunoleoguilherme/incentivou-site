import { PageHero } from '@/components/SiteChrome';
import ContactForm from '@/components/ContactForm';

import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

export default function Contato() {
  return (
    <main>
      <PageHero
        hideCard
        eyebrow="Contato"
        title={
          'Vamos descobrir como a IncentiVou pode ajudar <strong>seu próximo projeto.</strong>'
        }
        text="Preencha o formulário e nossa equipe fará o primeiro diagnóstico para indicar o melhor caminho."
      />

      <section className="section">
        <div className="container">

          <div className="contactPremiumGrid">

            {/* CARD ESQUERDO */}
            <div className="contactInfoCard">

              <div className="contactGlow" />

              <span className="contactEyebrow">
                CONTATO ESTRATÉGICO
              </span>

              <h2>
                Fale com a <strong>IncentiVou</strong>
              </h2>

              <p>
                Conte se você é empresa, executor ou parceiro.
                Nossa equipe direcionará você para a solução ideal.
              </p>

              <div className="contactItems">

                <div className="contactItem">
                  <div className="contactIcon blue">
                    <Mail size={18} />
                  </div>

                  <div>
                    <span>E-mail</span>
                    <strong>ester@incentivou.com.br</strong>
                  </div>
                </div>

                <div className="contactItem">
                  <div className="contactIcon green">
                    <MessageCircle size={18} />
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>(31) 9 9266-2943</strong>
                  </div>
                </div>

                <div className="contactItem">
                  <div className="contactIcon orange">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <span>Atendimento</span>
                    <strong>Nacional</strong>
                  </div>
                </div>

              </div>

              <div className="contactBottomBox">
                <p>
                  Atendimento consultivo especializado em
                  incentivo fiscal, compliance, captação
                  e gestão esportiva.
                </p>

                <button className="contactPremiumButton">
                  Falar agora
                  <ArrowRight size={17} />
                </button>
              </div>

            </div>

            {/* FORMULÁRIO */}
            <div className="contactFormCard">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}