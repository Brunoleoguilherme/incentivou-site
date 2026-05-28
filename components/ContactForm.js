'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Erro ao enviar');

      setStatus('Mensagem enviada com sucesso. Em breve entraremos em contato.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus(
        'Recebemos seus dados localmente. Configure o Supabase para salvar leads em produção.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contactFormPremium" onSubmit={onSubmit}>
      <div className="contactFormHeader">
        <span>FORMULÁRIO DE CONTATO</span>
        <h3>Conte rapidamente o que você precisa</h3>
        <p>
          Em poucos dados, nossa equipe entende seu perfil e indica o melhor
          caminho.
        </p>
      </div>

      <div className="contactFormGrid">
        <input name="nome" placeholder="Nome completo" required />

        <input name="email" type="email" placeholder="E-mail" required />

        <input name="telefone" placeholder="WhatsApp" />

        <select name="perfil" required defaultValue="">
          <option value="" disabled>
            Você é...
          </option>
          <option>Empresa interessada em incentivar</option>
          <option>Executor / OSC / Clube</option>
          <option>Parceiro estratégico</option>
          <option>Outro</option>
        </select>
      </div>

      <textarea
        name="mensagem"
        placeholder="Conte rapidamente o que você precisa"
      />

      <button className="contactSubmitBtn" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar mensagem'}
        <Send size={18} />
      </button>

      {status && (
        <p className="contactStatus">
          <CheckCircle2 size={18} />
          {status}
        </p>
      )}
    </form>
  );
}