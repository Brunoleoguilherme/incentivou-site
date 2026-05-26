import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function moeda(valor) {
  return Number(valor || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      nome,
      empresa,
      email,
      telefone,
      estado,
      regimeTributario,
      irDevido,
      potencial,
    } = body;

    const { error } = await supabase.from('simulacoes_empresas').insert([
      {
        nome,
        empresa,
        email,
        telefone,
        estado,
        regime_tributario: regimeTributario,
        ir_devido: irDevido,
        potencial_estimado: potencial,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: 'Erro ao salvar simulação' },
        { status: 500 }
      );
    }

    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'IncentiVou <noreply@incentivou.com.br>',
          to: [process.env.COMERCIAL_EMAIL || 'ester@incentivou.com.br'],
          subject: `Novo lead IncentiVou - ${empresa}`,
          html: `
            <div style="font-family: Arial, sans-serif; background:#f4f8ff; padding:30px;">
              <div style="max-width:620px; margin:auto; background:#ffffff; border-radius:20px; padding:28px; border:1px solid #dce7f7;">
                <h2 style="color:#0d2448; margin-top:0;">Novo lead recebido pelo simulador</h2>

                <p style="color:#5f6f89;">
                  Uma empresa acabou de simular o potencial de incentivo no site da IncentiVou.
                </p>

                <div style="background:#ebfff4; border-radius:16px; padding:18px; margin:20px 0;">
                  <strong style="color:#11b979; font-size:22px;">
                    Potencial estimado: ${moeda(potencial)}
                  </strong>
                </div>

                <h3 style="color:#0d2448;">Dados do lead</h3>

                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Empresa:</strong> ${empresa}</p>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
                <p><strong>Estado:</strong> ${estado}</p>
                <p><strong>Regime tributário:</strong> ${regimeTributario}</p>
                <p><strong>IR devido anual:</strong> ${moeda(irDevido)}</p>

                <a href="https://wa.me/55${String(telefone || '').replace(/\D/g, '')}"
                   style="display:inline-block; margin-top:20px; padding:14px 20px; border-radius:14px; background:#11b979; color:white; text-decoration:none; font-weight:bold;">
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Erro interno' },
      { status: 500 }
    );
  }
}