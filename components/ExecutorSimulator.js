'use client';

import { useMemo, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Trophy,
} from 'lucide-react';

export default function ExecutorSimulator() {
  const [loading, setLoading] = useState(false);
  const [calculado, setCalculado] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    nome: '',
    organizacao: '',
    email: '',
    telefone: '',
    tipo: 'OSC',
    cnpj: 'Sim',
    estatuto: 'Sim',
    experiencia: 'Não',
    anos: '1',
    autorizacaoLgpd: false,
  });

  const resultado = useMemo(() => {
    let score = 100;

    if (form.cnpj === 'Não') score -= 40;
    if (form.estatuto === 'Não') score -= 30;
    if (form.tipo === 'Projeto Independente') score -= 15;
    if (form.experiencia === 'Não') score -= 10;
    if (Number(form.anos) < 2) score -= 10;

    if (score >= 80) {
      return {
        score,
        status: 'APTA PARA CAPTAÇÃO',
        cor: '#14c784',
        texto:
          'Sua organização possui excelente potencial para aprovação e captação de recursos incentivados.',
      };
    }

    if (score >= 50) {
      return {
        score,
        status: 'APTA COM PENDÊNCIAS',
        cor: '#ffb020',
        texto:
          'Seu projeto possui potencial, mas precisa de ajustes técnicos, documentais ou jurídicos.',
      };
    }

    return {
      score,
      status: 'NÃO APTA NO MOMENTO',
      cor: '#ff5a5a',
      texto:
        'Sua estrutura atual precisa de regularização antes de iniciar a captação.',
    };
  }, [form]);

  function update(field, value) {
    setCalculado(false);
    setEnviado(false);

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function calcularEEnviar(e) {
    e.preventDefault();

    if (
      !form.nome ||
      !form.organizacao ||
      !form.email ||
      !form.telefone ||
      !form.tipo ||
      !form.cnpj ||
      !form.estatuto ||
      !form.experiencia ||
      !form.anos
    ) {
      alert('Preencha todos os campos antes de receber o diagnóstico.');
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(form.email)) {
      alert('Digite um e-mail válido.');
      return;
    }

    if (!form.autorizacaoLgpd) {
      alert('Você precisa aceitar a autorização LGPD para receber o diagnóstico.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/leads/executores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          score: resultado.score,
          status: resultado.status,
          texto: resultado.texto,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }

      setCalculado(true);
      setEnviado(true);
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar diagnóstico.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="executorPremiumCard" onSubmit={calcularEEnviar}>
      <div className="executorTop">
        <span className="simBadge green">Para executores</span>

        <div className="executorIcon">
          <Trophy size={28} />
        </div>
      </div>

      <h3>Simule a aptidão do seu projeto</h3>

      <p className="executorIntro">
        Preencha os dados, aceite a LGPD e receba um diagnóstico inicial da sua
        organização para aprovação, captação e execução incentivada.
      </p>

      <div className="executorMiniStats">
        <div>
          <Building2 size={18} />
          <span>Organização</span>
        </div>

        <div>
          <FileCheck2 size={18} />
          <span>Documentação</span>
        </div>

        <div>
          <ShieldCheck size={18} />
          <span>Compliance</span>
        </div>
      </div>

      <div className="executorFieldsGrid">
        <input
          required
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => update('nome', e.target.value)}
        />

        <input
          required
          placeholder="Nome da organização"
          value={form.organizacao}
          onChange={(e) => update('organizacao', e.target.value)}
        />

        <input
          required
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
        />

        <input
          required
          placeholder="Telefone / WhatsApp"
          value={form.telefone}
          onChange={(e) => update('telefone', e.target.value)}
        />

        <div className="field">
          <label>Tipo de organização</label>
          <select
            value={form.tipo}
            onChange={(e) => update('tipo', e.target.value)}
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
            value={form.cnpj}
            onChange={(e) => update('cnpj', e.target.value)}
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div className="field">
          <label>Finalidade esportiva no estatuto?</label>
          <select
            value={form.estatuto}
            onChange={(e) => update('estatuto', e.target.value)}
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div className="field">
          <label>Já teve projeto aprovado?</label>
          <select
            value={form.experiencia}
            onChange={(e) => update('experiencia', e.target.value)}
          >
            <option>Não</option>
            <option>Sim</option>
          </select>
        </div>

        <div className="field fieldFull">
          <label>Anos de atuação</label>
          <select
            value={form.anos}
            onChange={(e) => update('anos', e.target.value)}
          >
            <option value="1">Menos de 2 anos</option>
            <option value="3">2 a 5 anos</option>
            <option value="6">5 a 10 anos</option>
            <option value="10">Mais de 10 anos</option>
          </select>
        </div>
      </div>

      <label className="lgpdCheck">
        <input
          type="checkbox"
          checked={form.autorizacaoLgpd}
          onChange={(e) =>
            setForm({
              ...form,
              autorizacaoLgpd: e.target.checked,
            })
          }
        />

        <span>
          Autorizo a equipe da IncentiVou a entrar em contato comigo por e-mail,
          telefone ou WhatsApp de acordo com a LGPD.
        </span>
      </label>

      <button className="primaryBtn" type="submit" disabled={loading}>
        {loading ? 'Calculando e enviando...' : 'Receber diagnóstico completo'}
      </button>

      {calculado && (
        <div
          className="executorPremiumResult"
          style={{
            borderColor: resultado.cor,
          }}
        >
          <div>
            <span>Score de aptidão</span>
            <strong style={{ color: resultado.cor }}>{resultado.score}%</strong>
          </div>

          <div>
            <span>Status da organização</span>
            <h4 style={{ color: resultado.cor }}>{resultado.status}</h4>
            <p>{resultado.texto}</p>
          </div>
        </div>
      )}

      {calculado && (
        <div className="executorChecklist">
          <div>
            <CheckCircle2 size={17} />
            Diagnóstico documental inicial
          </div>

          <div>
            <CheckCircle2 size={17} />
            Avaliação de potencial de captação
          </div>

          <div>
            <CheckCircle2 size={17} />
            Indicação dos próximos passos
          </div>
        </div>
      )}

      {enviado && (
        <div className="simSuccess">
          <strong>Diagnóstico enviado com sucesso.</strong>

          <p>
            Nossa equipe comercial recebeu seus dados e também enviamos uma
            confirmação para o e-mail informado.
          </p>
        </div>
      )}
    </form>
  );
}