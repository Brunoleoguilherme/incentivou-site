'use client';

import { useMemo, useState } from 'react';

export default function ExecutorSimulator() {

  const [loading, setLoading] = useState(false);

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

  }, [form]);

  async function enviarDiagnostico(e) {

    e.preventDefault();

    if (!form.autorizacaoLgpd) {

      alert(
        'Você precisa autorizar o contato da equipe IncentiVou.'
      );

      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        '/api/leads/executores',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            ...form,
            status: resultado.status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Erro ao enviar');
      }

      alert(
        'Diagnóstico enviado com sucesso!'
      );

      setForm({
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

    } catch (err) {

      console.error(err);

      alert('Erro ao enviar diagnóstico.');

    } finally {

      setLoading(false);

    }

  }

  return (

    <form
      className="executorSimulator"
      onSubmit={enviarDiagnostico}
    >

      <span className="simBadge green">
        PARA EXECUTORES
      </span>

      <h3>
        Simule a aptidão do seu projeto
      </h3>

      <p>
        Descubra o potencial de aprovação,
        captação e estruturação do seu projeto
        esportivo incentivado.
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
          placeholder="Nome da organização"
          value={form.organizacao}
          onChange={(e) =>
            setForm({
              ...form,
              organizacao: e.target.value,
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

        <div className="field">

          <label>Tipo de organização</label>

          <select
            value={form.tipo}
            onChange={(e) =>
              setForm({
                ...form,
                tipo: e.target.value,
              })
            }
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
            onChange={(e) =>
              setForm({
                ...form,
                cnpj: e.target.value,
              })
            }
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
            value={form.estatuto}
            onChange={(e) =>
              setForm({
                ...form,
                estatuto: e.target.value,
              })
            }
          >
            <option>Sim</option>
            <option>Não</option>
          </select>

        </div>

        <div className="field">

          <label>
            Já teve projeto aprovado?
          </label>

          <select
            value={form.experiencia}
            onChange={(e) =>
              setForm({
                ...form,
                experiencia: e.target.value,
              })
            }
          >
            <option>Não</option>
            <option>Sim</option>
          </select>

        </div>

        <div className="field">

          <label>
            Anos de atuação
          </label>

          <select
            value={form.anos}
            onChange={(e) =>
              setForm({
                ...form,
                anos: e.target.value,
              })
            }
          >
            <option value="1">Menos de 2 anos</option>
            <option value="3">2 a 5 anos</option>
            <option value="6">5 a 10 anos</option>
            <option value="10">Mais de 10 anos</option>
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

        <strong
          style={{
            color: resultado.cor,
          }}
        >
          {resultado.status}
        </strong>

        <p>
          {resultado.texto}
        </p>

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
          Autorizo a equipe da IncentiVou a entrar
          em contato comigo por e-mail, telefone
          ou WhatsApp de acordo com a LGPD.
        </span>

      </label>

      <button
        className="primaryBtn"
        type="submit"
        disabled={loading}
      >

        {loading
          ? 'Enviando diagnóstico...'
          : 'Receber diagnóstico completo'}

      </button>

    </form>

  );

}