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
      autorizacaoLgpd,
    } = body;

    // VALIDAÇÕES
    if (
      !nome ||
      !empresa ||
      !email ||
      !telefone ||
      !estado ||
      !regimeTributario ||
      !irDevido
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
        {
          error:
            'É necessário aceitar o contato da equipe IncentiVou.',
        },
        { status: 400 }
      );
    }

    // SALVAR NO SUPABASE
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

    // =========================================================
    // EMAIL INTERNO
    // =========================================================

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IncentiVou <contato@incentivou.com.br>',
        to: emailsComerciais,
        subject: `🔥 Novo lead premium - ${empresa}`,
        html: `
          <div style="margin:0;padding:40px;background:#eef4ff;font-family:Arial,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">

                  <table width="720" cellpadding="0" cellspacing="0"
                    style="
                      background:#ffffff;
                      border-radius:28px;
                      overflow:hidden;
                      border:1px solid #dce7f7;
                    "
                  >

                    <tr>
                      <td
                        style="
                          background:linear-gradient(135deg,#0b63f6,#11c97b);
                          padding:38px;
                          color:white;
                        "
                      >
                        <div
                          style="
                            font-size:14px;
                            text-transform:uppercase;
                            letter-spacing:1px;
                            opacity:.85;
                            margin-bottom:12px;
                            font-weight:700;
                          "
                        >
                          Novo lead premium
                        </div>

                        <h1
                          style="
                            margin:0;
                            font-size:42px;
                            line-height:1.1;
                            font-weight:800;
                          "
                        >
                          ${empresa}
                        </h1>

                        <p
                          style="
                            margin-top:18px;
                            font-size:18px;
                            line-height:1.7;
                            opacity:.95;
                          "
                        >
                          Uma nova empresa realizou uma simulação premium na IncentiVou.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:38px;">

                        <div
                          style="
                            background:#f4fbff;
                            border:1px solid #dce7f7;
                            border-radius:24px;
                            padding:32px;
                            text-align:center;
                            margin-bottom:34px;
                          "
                        >
                          <div
                            style="
                              color:#6f7f98;
                              font-size:14px;
                              text-transform:uppercase;
                              margin-bottom:10px;
                              font-weight:700;
                            "
                          >
                            Potencial estimado
                          </div>

                          <div
                            style="
                              color:#11b979;
                              font-size:52px;
                              font-weight:800;
                            "
                          >
                            ${moeda(potencial)}
                          </div>
                        </div>

                        <table width="100%" cellpadding="12">

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              Nome
                            </td>

                            <td style="color:#51607a;">
                              ${nome}
                            </td>
                          </tr>

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              Empresa
                            </td>

                            <td style="color:#51607a;">
                              ${empresa}
                            </td>
                          </tr>

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              E-mail
                            </td>

                            <td style="color:#51607a;">
                              ${email}
                            </td>
                          </tr>

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              Telefone
                            </td>

                            <td style="color:#51607a;">
                              ${telefone}
                            </td>
                          </tr>

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              Estado
                            </td>

                            <td style="color:#51607a;">
                              ${estado}
                            </td>
                          </tr>

                          <tr>
                            <td style="font-weight:700;color:#0d2448;">
                              Regime
                            </td>

                            <td style="color:#51607a;">
                              ${regimeTributario}
                            </td>
                          </tr>

                        </table>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </div>
        `,
      }),
    });

    // =========================================================
    // EMAIL PARA O CLIENTE
    // =========================================================

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IncentiVou <noreply@incentivou.com.br>',
        to: [email],
        subject:
          '🚀 Sua empresa possui potencial para gerar impacto',
        html: `
          <div style="margin:0;padding:0;background:#eef4ff;font-family:Arial,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#eef4ff;">
              <tr>
                <td align="center">

                  <table width="680" cellpadding="0" cellspacing="0"
                    style="
                      background:#ffffff;
                      border-radius:28px;
                      overflow:hidden;
                      border:1px solid #dce7f7;
                    "
                  >

                    <!-- TOPO -->
                    <tr>
                      <td
                        style="
                          background:linear-gradient(135deg,#0b63f6,#11c97b);
                          padding:42px;
                        "
                      >

                        <div
                          style="
                            font-size:14px;
                            letter-spacing:2px;
                            text-transform:uppercase;
                            color:rgba(255,255,255,.8);
                            margin-bottom:14px;
                            font-weight:700;
                          "
                        >
                          IncentiVou • Simulação Inteligente
                        </div>

                        <h1
                          style="
                            margin:0;
                            font-size:44px;
                            line-height:1.1;
                            color:white;
                            font-weight:800;
                          "
                        >
                          Sua empresa possui potencial para gerar impacto.
                        </h1>

                        <p
                          style="
                            color:rgba(255,255,255,.92);
                            font-size:18px;
                            line-height:1.7;
                            margin-top:24px;
                            margin-bottom:0;
                          "
                        >
                          ${empresa}, identificamos potencial estratégico para transformar imposto devido em reputação, ESG e impacto esportivo.
                        </p>

                      </td>
                    </tr>

                    <!-- VALOR -->
                    <tr>
                      <td style="padding:36px 42px 10px 42px;">

                        <div
                          style="
                            background:#f4fbff;
                            border:1px solid #dce7f7;
                            border-radius:24px;
                            padding:34px;
                            text-align:center;
                          "
                        >

                          <div
                            style="
                              font-size:14px;
                              text-transform:uppercase;
                              letter-spacing:1px;
                              color:#6f7f98;
                              margin-bottom:10px;
                              font-weight:700;
                            "
                          >
                            Potencial estimado identificado
                          </div>

                          <div
                            style="
                              font-size:56px;
                              line-height:1;
                              font-weight:800;
                              color:#11b979;
                            "
                          >
                            ${moeda(potencial)}
                          </div>

                          <p
                            style="
                              margin-top:18px;
                              color:#51607a;
                              font-size:16px;
                              line-height:1.6;
                            "
                          >
                            Sua empresa pode utilizar esse valor para apoiar projetos incentivados e fortalecer posicionamento institucional.
                          </p>

                        </div>

                      </td>
                    </tr>

                    <!-- TEXTO -->
                    <tr>
                      <td style="padding:10px 42px 0 42px;">

                        <h2
                          style="
                            color:#0d2448;
                            font-size:28px;
                            margin-bottom:18px;
                          "
                        >
                          O que acontece agora?
                        </h2>

                        <table width="100%" cellpadding="0" cellspacing="0">

                          <tr>
                            <td style="padding-bottom:16px;">
                              <span style="font-size:22px;">✅</span>
                            </td>

                            <td
                              style="
                                padding-left:12px;
                                padding-bottom:16px;
                                color:#51607a;
                                font-size:16px;
                                line-height:1.7;
                              "
                            >
                              Nossa equipe analisa o perfil tributário da empresa.
                            </td>
                          </tr>

                          <tr>
                            <td style="padding-bottom:16px;">
                              <span style="font-size:22px;">✅</span>
                            </td>

                            <td
                              style="
                                padding-left:12px;
                                padding-bottom:16px;
                                color:#51607a;
                                font-size:16px;
                                line-height:1.7;
                              "
                            >
                              Identificamos projetos alinhados ao posicionamento da marca.
                            </td>
                          </tr>

                          <tr>
                            <td style="padding-bottom:16px;">
                              <span style="font-size:22px;">✅</span>
                            </td>

                            <td
                              style="
                                padding-left:12px;
                                padding-bottom:16px;
                                color:#51607a;
                                font-size:16px;
                                line-height:1.7;
                              "
                            >
                              Estruturamos oportunidades ESG e ativações estratégicas.
                            </td>
                          </tr>

                          <tr>
                            <td style="padding-bottom:16px;">
                              <span style="font-size:22px;">✅</span>
                            </td>

                            <td
                              style="
                                padding-left:12px;
                                padding-bottom:16px;
                                color:#51607a;
                                font-size:16px;
                                line-height:1.7;
                              "
                            >
                              Um especialista da IncentiVou entrará em contato rapidamente.
                            </td>
                          </tr>

                        </table>

                      </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                      <td style="padding:20px 42px 50px 42px;">

                        <a
                          href="https://wa.me/5531997797957"
                          style="
                            display:inline-block;
                            background:linear-gradient(135deg,#0b63f6,#11c97b);
                            color:white;
                            text-decoration:none;
                            padding:20px 34px;
                            border-radius:18px;
                            font-size:18px;
                            font-weight:700;
                          "
                        >
                          Falar com especialista →
                        </a>

                      </td>
                    </tr>

                    <!-- RODAPÉ -->
                    <tr>
                      <td
                        style="
                          padding:28px 42px;
                          background:#f7fbff;
                          border-top:1px solid #e5edf8;
                        "
                      >

                        <p
                          style="
                            margin:0;
                            color:#7b8ba5;
                            font-size:13px;
                            line-height:1.8;
                          "
                        >
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