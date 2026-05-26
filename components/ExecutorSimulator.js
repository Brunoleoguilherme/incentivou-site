'use client';

import { useMemo, useState } from 'react';

export default function ExecutorSimulator() {
  const [tipo, setTipo] = useState('OSC');
  const [cnpj, setCnpj] = useState('Sim');
  const [estatuto, setEstatuto] = useState('Sim');

  const resultado = useMemo(() => {
    let score = 100;

    if (cnpj === 'Não') score -= 50;
    if (estatuto === 'Não') score -= 35;
    if (tipo === 'Projeto Independente') score -= 20;

    if (score >= 80) {
      return {
        status: 'APTA PARA CAPTAÇÃO',
        cor: '#14c784',
        texto:
          'Sua organização possui excelente potencial para aprovação e captação de recursos incentivados.',
      };
    }

    if (score >= 50) {
      return {
        status: 'APTA COM PENDÊNCIAS',
        cor: '#ffb020',
        texto:
          'Seu projeto possui potencial, mas precisa de alguns ajustes técnicos e documentais.',
      };
    }

    return {
      status: 'NÃO APTA NO MOMENTO',
      cor: '#ff5a5a',
      texto:
        'Sua estrutura atual precisa de regularização antes do processo de captação.',
    };
  }, [tipo, cnpj, estatuto]);

  return (
    <div className="executorSimulator">

      <span className="simBadge green">
        PARA EXECUTORES
      </span>

      <h3>
        Simule a aptidão do seu projeto
      </h3>

      <p>
        Faça uma análise inicial da sua estrutura e
        descubra o potencial de aprovação e captação
        do seu projeto esportivo.
      </p>

      <div className="simFields">

        <div className="field">
          <label>Tipo de organização</label>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option>OSC</option>
            <option>Associação</option>
            <option>Instituto</option>
            <option>Projeto Independente</option>
          </select>
        </div>

        <div className="field">
          <label>CNPJ ativo?</label>

          <select
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div className="field">
          <label>
            Finalidade esportiva no estatuto?
          </label>

          <select
            value={estatuto}
            onChange={(e) => setEstatuto(e.target.value)}
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

      </div>

      <div
        className="executorResult"
        style={{
          borderColor: resultado.cor,
        }}
      >
        <span>Status da organização</span>

        <strong style={{ color: resultado.cor }}>
          {resultado.status}
        </strong>

        <p>{resultado.texto}</p>
      </div>

      <button className="primaryBtn outline">
        Fazer diagnóstico completo
      </button>
    </div>
  );
}