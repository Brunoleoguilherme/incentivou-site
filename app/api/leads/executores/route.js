import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

function emailsComerciais() {
  return String(process.env.COMERCIAL_EMAIL || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

async function enviarEmail({ to, subject, html }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'IncentiVou <noreply@incentivou.com.br>',
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const erro = await response.text();
    throw new Error(erro);
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      nome,
      organizacao,
      email,
      telefone,
      tipo,
      cnpj,
      estatuto,
      experiencia,
      anos,
      score,
      status,
      texto,
      autorizacaoLgpd,
    } = body;

    if (
      !nome ||
      !organizacao ||
      !email ||
      !telefone ||
      !tipo ||
      !cnpj ||
      !estatuto ||
      !experiencia ||
      !anos
    ) {
      return NextResponse.json(
        { error: 'Preencha todos os campos.' },
        { status: 400 }
      );
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido.' },
        { status: 400 }
      );
    }

    if (!autorizacaoLgpd) {
      return NextResponse.json(
        { error: 'Autorização LGPD obrigatória.' },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    if (supabase) {
      await supabase.from('simulacoes_executores').insert([
        {
          nome,
          organizacao,
          email,
          telefone,
          tipo_organizacao: tipo,
          cnpj_ativo: cnpj,
          finalidade_esportiva: estatuto,
          experiencia,
          anos_atuacao: anos,
          status_diagnostico: status,
          autorizacao_lgpd: true,
        },
      ]);
    }

    await enviarEmail({
      to: emailsComerciais(),
      subject: `Novo lead executor IncentiVou - ${organizacao}`,
      html: `
        <div style="margin:0;padding:40px;background:#eef4ff;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center">
                <table width="720" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid #dce7f7;">
                  <tr>
                    <td style="background:linear-gradient(135deg,#0b63f6,#11c97b);padding:38px;color:white;">
                      <div style="font-size:14px;text-transform:uppercase;letter-spacing:1px;opacity:.85;margin-bottom:12px;font-weight:700;">
                        Novo lead executor
                      </div>

                      <h1 style="margin:0;font-size:40px;line-height:1.1;font-weight:800;">
                        ${organizacao}
                      </h1>

                      <p style="margin-top:18px;font-size:18px;line-height:1.7;opacity:.95;">
                        Um executor realizou o diagnóstico inicial no site da IncentiVou.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:38px;">
                      <div style="background:#f4fbff;border:1px solid #dce7f7;border-radius:24px;padding:32px;text-align:center;margin-bottom:34px;">
                        <div style="color:#6f7f98;font-size:14px;text-transform:uppercase;margin-bottom:10px;font-weight:700;">
                          Status do diagnóstico
                        </div>

                        <div style="color:#11b979;font-size:38px;font-weight:800;">
                          ${status}
                        </div>

                        <div style="color:#0d2448;font-size:34px;font-weight:800;margin-top:14px;">
                          Score: ${score}%
                        </div>
                      </div>

                      <p><strong>Nome:</strong> ${nome}</p>
                      <p><strong>Organização:</strong> ${organizacao}</p>
                      <p><strong>E-mail:</strong> ${email}</p>
                      <p><strong>Telefone:</strong> ${telefone}</p>
                      <p><strong>Tipo:</strong> ${tipo}</p>
                      <p><strong>CNPJ ativo:</strong> ${cnpj}</p>
                      <p><strong>Finalidade esportiva:</strong> ${estatuto}</p>
                      <p><strong>Projeto aprovado anteriormente:</strong> ${experiencia}</p>
                      <p><strong>Anos de atuação:</strong> ${anos}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    await enviarEmail({
      to: [email],
      subject: 'Recebemos seu diagnóstico IncentiVou',
      html: `
        <div style="margin:0;padding:0;background:#eef4ff;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#eef4ff;">
            <tr>
              <td align="center">
                <table width="680" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid #dce7f7;">
                  <tr>
                    <td style="background:linear-gradient(135deg,#0b63f6,#11c97b);padding:42px;">
                      <div style="font-size:14px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.8);margin-bottom:14px;font-weight:700;">
                        IncentiVou • Diagnóstico Inteligente
                      </div>

                      <h1 style="margin:0;font-size:42px;line-height:1.1;color:white;font-weight:800;">
                        ${organizacao}, recebemos seu diagnóstico.
                      </h1>

                      <p style="color:rgba(255,255,255,.92);font-size:18px;line-height:1.7;margin-top:24px;margin-bottom:0;">
                        A IncentiVou vai analisar sua estrutura e indicar os próximos passos para transformar seu projeto em uma oportunidade real de captação.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:36px 42px;">
                      <div style="background:#f4fbff;border:1px solid #dce7f7;border-radius:24px;padding:34px;text-align:center;">
                        <div style="font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#6f7f98;margin-bottom:10px;font-weight:700;">
                          Status inicial
                        </div>

                        <div style="font-size:36px;line-height:1.1;font-weight:800;color:#11b979;">
                          ${status}
                        </div>

                        <div style="font-size:40px;line-height:1;margin-top:18px;font-weight:800;color:#0d2448;">
                          ${score}%
                        </div>

                        <p style="margin-top:18px;color:#51607a;font-size:16px;line-height:1.6;">
                          ${texto}
                        </p>
                      </div>

                      <h2 style="color:#0d2448;font-size:26px;margin-top:34px;">
                        O que acontece agora?
                      </h2>

                      <p style="font-size:16px;color:#51607a;line-height:1.7;">
                        Nossa equipe comercial recebeu seus dados e irá avaliar o potencial do seu projeto para aprovação, regularização documental e captação via Lei de Incentivo ao Esporte.
                      </p>

                      <a href="https://wa.me/5531997797957" style="display:inline-block;margin-top:22px;background:linear-gradient(135deg,#0b63f6,#11c97b);color:white;text-decoration:none;padding:18px 28px;border-radius:16px;font-size:17px;font-weight:700;">
                        Falar com especialista →
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:28px 42px;background:#f7fbff;border-top:1px solid #e5edf8;">
                      <p style="margin:0;color:#7b8ba5;font-size:13px;line-height:1.8;">
                        IncentiVou • Plataforma inteligente de incentivo ao esporte e ESG.<br/>
                        Este contato foi autorizado através do formulário do site conforme LGPD.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}