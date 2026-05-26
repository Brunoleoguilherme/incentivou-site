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
    autorizacaoLgpd: false,
  });

  const potencial =
    form.regime === 'Lucro Real'
      ? Number(String(form.ir).replace(/\D/g, '')) * 0.04
      : 0;

  async function enviarLead(e) {
    e.preventDefault();

    if (!form.autorizacaoLgpd) {
      alert(
        'Você precisa autorizar o contato da equipe IncentiVou para continuar.'
      );
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

      alert(
        'Simulação enviada com sucesso! Nosso comercial entrará em contato.'
      );

      setForm({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        regime: 'Lucro Real',
        ir: '',
        estado: 'Minas Gerais',
        autorizacaoLgpd: false,
      });
    } catch (err) {
      alert('Erro ao enviar simulação.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="simulador-empresa"
      className="empresaSimulatorCard"
      onSubmit={enviarLead}
    >
      <span className="simBadge">
        Simulador
      </span>

      <h3>Simule seu potencial de incentivo</h3>

      <p>
        Preencha os dados para calcular o potencial e enviar
        para nosso comercial.
      </p>

      <div className="simFields">
        <input
          required
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) =>
            setForm({
              ...form,
              nome: e.target.value,
            })
          }
        />

        <input
          required
          placeholder="Empresa"
          value={form.empresa}
          onChange={(e) =>
            setForm({
              ...form,
              empresa: e.target.value,
            })
          }
        />

        <input
          required
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          required
          placeholder="Telefone / WhatsApp"
          value={form.telefone}
          onChange={(e) =>
            setForm({
              ...form,
              telefone: e.target.value,
            })
          }
        />

        <select
          value={form.regime}
          onChange={(e) =>
            setForm({
              ...form,
              regime: e.target.value,
            })
          }
        >
          <option>Lucro Real</option>
          <option>Lucro Presumido</option>
          <option>Simples Nacional</option>
        </select>

        <input
          required
          placeholder="IR devido anual"
          value={form.ir}
          onChange={(e) =>
            setForm({
              ...form,
              ir: e.target.value,
            })
          }
        />

        <select
          value={form.estado}
          onChange={(e) =>
            setForm({
              ...form,
              estado: e.target.value,
            })
          }
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
          Você pode transformar imposto em impacto esportivo
          e ESG.
        </p>
      </div>

      <label
        style={{
          display: 'flex',
          gap: 10,
          alignItems: 'flex-start',
          marginTop: 18,
          marginBottom: 18,
          fontSize: 14,
          color: '#51607a',
          lineHeight: 1.6,
        }}
      >
        <input
          type="checkbox"
          checked={form.autorizacaoLgpd}
          onChange={(e) =>
            setForm({
              ...form,
              autorizacaoLgpd: e.target.checked,
            })
          }
          style={{
            marginTop: 4,
          }}
        />

        <span>
          Autorizo a equipe da IncentiVou a entrar em contato
          comigo por e-mail, telefone ou WhatsApp de acordo
          com a LGPD e política de privacidade.
        </span>
      </label>

      <button
        className="primaryBtn"
        type="submit"
        disabled={loading}
      >
        {loading
          ? 'Enviando...'
          : 'Enviar para o comercial'}
      </button>
    </form>
  );
}