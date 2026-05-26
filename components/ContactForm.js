'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

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
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('Erro ao enviar');
      setStatus('Mensagem enviada com sucesso. Em breve entraremos em contato.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Recebemos seus dados localmente. Configure o Supabase para salvar leads em produção.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="panel form" onSubmit={onSubmit}>
      <input name="nome" placeholder="Nome completo" required />
      <input name="email" type="email" placeholder="E-mail" required />
      <input name="telefone" placeholder="WhatsApp" />
      <select name="perfil" required defaultValue="">
        <option value="" disabled>Você é...</option>
        <option>Empresa interessada em incentivar</option>
        <option>Executor / OSC / Clube</option>
        <option>Parceiro estratégico</option>
        <option>Outro</option>
      </select>
      <textarea name="mensagem" placeholder="Conte rapidamente o que você precisa" />
      <button className="btn primary" disabled={loading}>{loading ? 'Enviando...' : 'Enviar mensagem'} <Send size={17}/></button>
      {status && <p style={{ color:'var(--green-2)', fontWeight:800 }}>{status}</p>}
    </form>
  );
}
