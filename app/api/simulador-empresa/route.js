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

    await supabase.from('simulacoes_empresas').insert([
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

    const emailsComerciais = String(
      process.env.COMERCIAL_EMAIL || ''
    )
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    // EMAIL INTERNO
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IncentiVou <noreply@incentivou.com.br>',
        to: emailsComerciais,
        subject: `🔥 Novo lead premium - ${empresa}`,
        html: `
          <div style="font-family:Arial;background:#f4f8ff;padding:40px;">
            <div style="max-width:700px;margin:auto;background:#fff;border-radius:24px;padding:36px;border:1px solid #dce7f7;">
              
              <h1 style="color:#0d2448;">
                Novo lead premium recebido 🚀
              </h1>

              <p style="font-size:16px;color:#51607a;">
                Uma empresa realizou uma simulação de incentivo no site da IncentiVou.
              </p>

              <div style="background:linear-gradient(135deg,#0b63f6,#11c97b);padding:28px;border-radius:22px;color:white;margin:30px 0;">
                <div style="font-size:15px;opacity:.9;">
                  Potencial estimado
                </div>

                <div style="font-size:42px;font-weight:800;">
                  ${moeda(potencial)}
                </div>
              </div>

              <table style="width:100%;font-size:16px;color:#0d2448;">
                <tr><td><strong>Nome:</strong></td><td>${nome}</td></tr>
                <tr><td><strong>Empresa:</strong></td><td>${empresa}</td></tr>
                <tr><td><strong>E-mail:</strong></td><td>${email}</td></tr>
                <tr><td><strong>Telefone:</strong></td><td>${telefone}</td></tr>
                <tr><td><strong>Estado:</strong></td><td>${estado}</td></tr>
                <tr><td><strong>Regime:</strong></td><td>${regimeTributario}</td></tr>
              </table>

            </div>
          </div>
        `,
      }),
    });

    // EMAIL PARA O CLIENTE
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IncentiVou <noreply@incentivou.com.br>',
        to: [email],
        subject: '🚀 Sua empresa possui potencial para gerar impacto',
        html: `
          <div style="font-family:Arial;background:#eef5ff;padding:40px;">
            <div style="max-width:720px;margin:auto;background:white;border-radius:28px;padding:42px;border:1px solid #dce7f7;">
              
              <h1 style="font-size:42px;color:#0d2448;line-height:1.1;">
                ${empresa},
                sua empresa pode transformar imposto em reputação e impacto.
              </h1>

              <p style="font-size:18px;color:#51607a;line-height:1.7;margin-top:24px;">
                Recebemos sua simulação na IncentiVou e identificamos potencial para utilização estratégica de incentivo fiscal através do esporte.
              </p>

              <div style="background:linear-gradient(135deg,#0b63f6,#11c97b);padding:30px;border-radius:24px;color:white;margin:34px 0;">
                
                <div style="font-size:15px;opacity:.9;">
                  Potencial estimado identificado
                </div>

                <div style="font-size:52px;font-weight:800;">
                  ${moeda(potencial)}
                </div>

              </div>

              <p style="font-size:18px;color:#0d2448;font-weight:700;">
                O que acontece agora?
              </p>

              <ul style="font-size:16px;color:#51607a;line-height:1.8;">
                <li>Análise estratégica do perfil da empresa;</li>
                <li>Identificação de projetos alinhados à marca;</li>
                <li>Estratégia ESG e posicionamento institucional;</li>
                <li>Apresentação comercial personalizada.</li>
              </ul>

              <div style="margin-top:34px;">
                <a href="https://wa.me/5531997797957"
                  style="display:inline-block;padding:18px 28px;border-radius:16px;background:#11c97b;color:white;font-weight:700;text-decoration:none;">
                  Falar com especialista
                </a>
              </div>

            </div>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}