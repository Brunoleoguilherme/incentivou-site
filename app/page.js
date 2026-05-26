import {
  Audiences,
  HeroHome,
  SolutionsCards,
  ValueStrip,
} from '@/components/HomeBlocks';

import { CTA } from '@/components/SiteChrome';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <HeroHome />

      <ValueStrip />

      <section className="section">
        <div className="container">
          <div className="simulatorSection">
            <div className="homeSimulatorHeader">
              <span className="eyebrow">
                SIMULAÇÃO INTELIGENTE
              </span>

              <h2>
                Descubra seu potencial dentro da
                <span> Lei de Incentivo</span>
              </h2>

              <p>
                Tecnologia e inteligência para empresas
                e executores entenderem rapidamente
                oportunidades, riscos e potencial de
                captação.
              </p>
            </div>

            <div className="simulatorGrid">
              <div className="simCard empresa">
                <div className="simTop">
                  <span className="simBadge">
                    PARA EMPRESAS
                  </span>

                  <h3>
                    Simule seu potencial de incentivo
                  </h3>

                  <p>
                    Descubra quanto sua empresa pode
                    destinar via incentivo fiscal.
                  </p>
                </div>

                <div className="simFields">
                  <div className="field">
                    <label>Regime Tributário</label>

                    <select>
                      <option>Lucro Real</option>
                      <option>Lucro Presumido</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>IR devido anual</label>

                    <input
                      type="text"
                      placeholder="R$ 500.000"
                    />
                  </div>

                  <div className="field">
                    <label>Estado</label>

                    <select>
                      <option>Minas Gerais</option>
                      <option>São Paulo</option>
                      <option>Rio de Janeiro</option>
                    </select>
                  </div>
                </div>

                <div className="simResult">
                  <span>Potencial estimado</span>

                  <strong>R$ 120.000</strong>

                  <p>
                    Você pode transformar imposto em
                    impacto esportivo e ESG.
                  </p>
                </div>

                <Link
                  href="/contato"
                  className="primaryBtn"
                >
                  Quero falar com um especialista
                </Link>
              </div>

              <div className="simCard executor">
                <div className="simTop">
                  <span className="simBadge green">
                    PARA EXECUTORES
                  </span>

                  <h3>
                    Simule a aptidão do seu projeto
                  </h3>

                  <p>
                    Faça um diagnóstico inicial da sua
                    organização.
                  </p>
                </div>

                <div className="simFields">
                  <div className="field">
                    <label>Tipo de organização</label>

                    <select>
                      <option>OSC</option>
                      <option>Associação</option>
                      <option>Instituto</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>CNPJ ativo?</label>

                    <select>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                  </div>

                  <div className="field">
                    <label>
                      Finalidade esportiva no estatuto?
                    </label>

                    <select>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                  </div>
                </div>

                <div className="simResult success">
                  <span>Status da organização</span>

                  <strong>APTA COM PENDÊNCIAS</strong>

                  <p>
                    Sua organização possui potencial
                    para aprovação com ajustes técnicos.
                  </p>
                </div>

                <Link
                  href="/executores"
                  className="outlineBtn"
                >
                  Fazer diagnóstico completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionsCards />

      <Audiences />

      <CTA />
    </main>
  );
}     