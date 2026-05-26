'use client';

import { useState } from 'react';

export default function EmpresaSimulator() {
  const [loading, setLoading] = useState(false);
  const [calculado, setCalculado] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    regime: 'Lucro Real',
    ir: '',
    estado: 'Minas Gerais',
    autorizacaoLgpd: false,
  });

  const potencial =
    form.regime === 'Lucro Real'
      ? Number(String(form.ir).replace(/\D/g, '')) * 0.04
      : 0;

  async function calcularEEnviar(e) {
    e.preventDefault();

    if (
      !form.nome ||
      !form.empresa ||
      !form.email ||
      !form.telefone ||
      !form.ir ||
      !form.estado
    ) {
      alert('Preencha todos os campos antes de calcular.');
      return;
    }

    if (!form.autorizacaoLgpd) {
      alert('Você precisa aceitar a autorização LGPD para calcular.');
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(form.email)) {
      alert('Digite um e-mail válido.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/leads/empresas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: form.nome,
          empresa: form.empresa,
          email: form.email,
          telefone: form.telefone,
          estado: form.estado,
          regimeTributario: form.regime,
          irDevido: form.ir,
          potencial,
          autorizacaoLgpd: form.autorizacaoLgpd,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }

      setCalculado(true);
      setEnviado(true);
    } catch (err) {
      console.error(err);
      alert('Erro ao enviar simulação.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="simulador-empresa"
      className="empresaSimulatorCard"
      onSubmit={calcularEEnviar}
    >
      <span className="simBadge">Simulador Empresas</span>

      <h3>Simule seu potencial de incentivo</h3>

      <p>
        Preencha os dados, autorize o contato e calcule o potencial estimado da sua empresa.
      </p>

      <div className="simFields">
        <input
          required
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <input
          required
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
        />

        <input
          required
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          required
          placeholder="Telefone / WhatsApp"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
        />

        <select
          value={form.regime}
          onChange={(e) => {
            setForm({ ...form, regime: e.target.value });
            setCalculado(false);
            setEnviado(false);
          }}
        >
          <option>Lucro Real</option>
          <option>Lucro Presumido</option>
          <option>Simples Nacional</option>
        </select>

        <input
          required
          placeholder="IR devido anual"
          value={form.ir}
          onChange={(e) => {
            setForm({ ...form, ir: e.target.value });
            setCalculado(false);
            setEnviado(false);
          }}
        />

        <select
          value={form.estado}
          onChange={(e) => setForm({ ...form, estado: e.target.value })}
        >
          <option>Minas Gerais</option>
          <option>São Paulo</option>
          <option>Rio de Janeiro</option>
          <option>Outro</option>
        </select>
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
          telefone ou WhatsApp conforme a LGPD.
        </span>
      </label>

      <button className="primaryBtn" type="submit" disabled={loading}>
        {loading ? 'Calculando e enviando...' : 'Calcular potencial'}
      </button>

      {calculado && (
        <div className="simResult">
          <span>Potencial estimado</span>

          <strong>
            {potencial.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>

          <p>
            Sua empresa possui potencial para transformar imposto em impacto esportivo,
            reputacional e ESG.
          </p>
        </div>
      )}

      {enviado && (
        <div className="simSuccess">
          <strong>Simulação enviada com sucesso.</strong>

          <p>
            Nossa equipe comercial já recebeu seus dados e também enviamos uma
            confirmação para o e-mail informado.
          </p>
        </div>
      )}
    </form>
  );
}