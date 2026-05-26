'use client';

import { useState } from 'react';

export default function EmpresaSimulator() {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    regime: 'Lucro Real',
    ir: '',
    estado: 'Minas Gerais',
  });

  const [loading, setLoading] = useState(false);

  const potencial =
    form.regime === 'Lucro Real'
      ? Number(String(form.ir).replace(/\D/g, '')) * 0.04
      : 0;

  async function enviarLead(e) {
    e.preventDefault();

    try {
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
          irDevido: Number(
            String(form.ir).replace(/\D/g, '')
          ),
          potencial,
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
      });
    } catch (error) {
      console.log(error);

      alert(
        'Erro ao enviar simulação.'
      );
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

      <h3>
        Simule seu potencial de incentivo
      </h3>

      <p>
        Preencha os dados para calcular o
        potencial e enviar para nosso
        comercial.
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
          <option>Paraná</option>
          <option>Santa Catarina</option>
          <option>Bahia</option>
          <option>Outro</option>
        </select>
      </div>

      <div className="simResult">
        <span>Potencial estimado</span>

        <strong>
          {potencial.toLocaleString(
            'pt-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }
          )}
        </strong>

        <p>
          Você pode transformar imposto
          em impacto esportivo e ESG.
        </p>
      </div>

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