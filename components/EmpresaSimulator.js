'use client';

import { useState } from 'react';

export default function EmpresaSimulator() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    regime: 'Lucro Real',
    ir: '',
    estado: 'Minas Gerais',
    lgpd: false,
  });

  const potencial =
    form.regime === 'Lucro Real'
      ? Number(String(form.ir).replace(/\D/g, '')) * 0.04
      : 0;

  function update(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function enviarLead(e) {
    e.preventDefault();

    const emailValido = /\S+@\S+\.\S+/.test(form.email);

    if (!emailValido) {
      alert('Digite um e-mail válido.');
      return;
    }

    if (!form.lgpd) {
      alert('É necessário autorizar o contato conforme a LGPD.');
      return;
    }

    setLoading(true);

    const response = await fetch('/api/simulador-empresa', {
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
      }),
    });

    setLoading(false);

    if (!response.ok) {
      alert('Erro ao enviar simulação.');
      return;
    }

    alert(
      'Simulação enviada com sucesso! Nossa equipe comercial entrará em contato.'
    );

    setForm({
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      regime: 'Lucro Real',
      ir: '',
      estado: 'Minas Gerais',
      lgpd: false,
    });
  }

  return (
    <form
      id="simulador-empresa"
      className="empresaSimulatorCard"
      onSubmit={enviarLead}
    >
      <span className="simBadge">
        Simulador Premium
      </span>

      <h3>Simule seu potencial de incentivo</h3>

      <p>
        Descubra rapidamente quanto sua empresa pode
        transformar em impacto esportivo, ESG e reputação.
      </p>

      <div className="simFields">
        <input
          required
          value={form.nome}
          placeholder="Seu nome"
          onChange={(e) => update('nome', e.target.value)}
        />

        <input
          required
          value={form.empresa}
          placeholder="Empresa"
          onChange={(e) => update('empresa', e.target.value)}
        />

        <input
          required
          type="email"
          value={form.email}
          placeholder="E-mail corporativo"
          onChange={(e) => update('email', e.target.value)}
        />

        <input
          required
          value={form.telefone}
          placeholder="Telefone / WhatsApp"
          onChange={(e) => update('telefone', e.target.value)}
        />

        <select
          value={form.regime}
          onChange={(e) => update('regime', e.target.value)}
        >
          <option>Lucro Real</option>
          <option>Lucro Presumido</option>
          <option>Simples Nacional</option>
        </select>

        <input
          required
          value={form.ir}
          placeholder="IR devido anual"
          onChange={(e) => update('ir', e.target.value)}
        />

        <select
          value={form.estado}
          onChange={(e) => update('estado', e.target.value)}
        >
          <option>Minas Gerais</option>
          <option>São Paulo</option>
          <option>Rio de Janeiro</option>
          <option>Outro</option>
        </select>
      </div>

      <div className="simResult">
        <span>Potencial estimado</span>

        <strong>
          {potencial.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>

        <p>
          Sua empresa pode direcionar esse valor para
          projetos esportivos incentivados.
        </p>
      </div>

      <label className="lgpdCheck">
        <input
          type="checkbox"
          checked={form.lgpd}
          onChange={(e) => update('lgpd', e.target.checked)}
        />

        <span>
          Autorizo a IncentiVou a entrar em contato e utilizar
          meus dados conforme a LGPD para fins comerciais e
          apresentação de oportunidades.
        </span>
      </label>

      <button
        className="primaryBtn"
        type="submit"
        disabled={loading}
      >
        {loading
          ? 'Enviando...'
          : 'Receber diagnóstico completo'}
      </button>
    </form>
  );
}