import { CTA } from '@/components/SiteChrome';
import { empresaItems } from '@/components/data';
import {
  ArrowRight,
  Check,
  Calculator,
  FileBarChart,
  HeartHandshake,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import EmpresaSimulator from '@/components/EmpresaSimulator';

export default function Empresas() {
  const recursos = [
    {
      Icon: Calculator,
      t: 'Calculadora Fiscal',
      d: 'Simulação com base no imposto devido.',
    },
    {
      Icon: HeartHandshake,
      t: 'Projetos Alinhados',
      d: 'Marketplace por modalidade, localidade e impacto.',
    },
    {
      Icon: FileBarChart,
      t: 'Relatório ESG',
      d: 'Retorno institucional e indicadores de impacto.',
    },
    {
      Icon: Shield,
      t: 'Compliance',
      d: 'Segurança documental e rastreabilidade.',
    },
  ];

  return (
    <main>
      <section
        id="simulador-empresa"
        className="section empresaPremiumSection"
      >
        <div className="container empresaPremiumGrid">
          <div className="empresaPremiumText">
            <span className="simBadge green">
              Simulação para empresas
            </span>

            <h2>
              Incentivar pode ser simples, seguro e estratégico.
            </h2>

            <p className="lead">
              Descubra quanto sua empresa pode destinar via
              incentivo fiscal e transformar imposto devido em
              reputação, ESG e impacto real.
            </p>

            <p>
              A IncentiVou apoia sua empresa na identificação
              do potencial de incentivo, seleção de projetos
              alinhados à marca, acompanhamento de resultados
              e geração de relatórios claros para comunicação
              institucional.
            </p>

            <ul className="clean empresaChecklist">
              {empresaItems.map((item) => (
                <li key={item}>
                  <Check color="var(--green-2)" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="empresaInfoBox empresaInfoBoxPremium">
              <div className="empresaInfoIcon">
                <HeartHandshake size={30} />
              </div>

              <div>
                <strong>
                  Atendimento especializado
                </strong>

                <p>
                  Nossa equipe comercial recebe seus dados,
                  analisa o potencial e entra em contato para
                  apresentar os caminhos mais seguros para
                  transformar imposto em impacto esportivo.
                </p>
              </div>
            </div>

            <Link className="btn primary" href="/contato">
              Falar com especialista
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="empresaSimulatorWrap">
            <EmpresaSimulator />
          </div>
        </div>
      </section>

      <section className="section empresaRecursosSection">
        <div className="container">
          <div className="beneficiosClientesHeader">
            <span className="beneficiosLine" />

            <h2>
              BENEFÍCIOS DISPONÍVEIS PARA CLIENTES INCENTIVOU
            </h2>

            <span className="beneficiosLine" />
          </div>

          <div className="cards empresaRecursosGrid beneficiosGridPremium">
            {recursos.map(({ Icon, t, d }) => (
              <div className="card beneficioCardPremium" key={t}>
                <div className="beneficioIconPremium">
                  <Icon size={38} />
                </div>

                <h3>{t}</h3>

                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}