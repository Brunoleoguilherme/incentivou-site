import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const required = ['nome', 'email', 'perfil'];
    for (const field of required) {
      if (!body[field]) return NextResponse.json({ error: `Campo obrigatório: ${field}` }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    if (!supabase) return NextResponse.json({ ok: true, mode: 'without-supabase' });

    const { error } = await supabase.from('leads').insert({
      nome: body.nome,
      email: body.email,
      telefone: body.telefone || null,
      perfil: body.perfil,
      mensagem: body.mensagem || null,
      origem: 'site-incentivou',
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro inesperado' }, { status: 500 });
  }
}
