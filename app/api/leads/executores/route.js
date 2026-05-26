import { NextResponse } from 'next/server';

import { Resend } from 'resend';

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req) {

  try {

    const data = await req.json();

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
      status,
    } = data;

    // EMAIL INTERNO

    await resend.emails.send({

      from:
        'IncentiVou <noreply@incentivou.com.br>',

      to: [
        'bruno@brasilsportsbusiness.com',
      ],

      subject:
        'Novo lead executor recebido',

      html: `
        <div style="font-family:Arial;padding:40px;background:#f4f8ff;">
          <div style="max-width:700px;background:white;border-radius:24px;padding:40px;margin:auto;">
            
            <h1 style="color:#082252;">
              Novo executor interessado
            </h1>

            <p>
              <strong>Nome:</strong> ${nome}
            </p>

            <p>
              <strong>Organização:</strong> ${organizacao}
            </p>

            <p>
              <strong>Email:</strong> ${email}
            </p>

            <p>
              <strong>Telefone:</strong> ${telefone}
            </p>

            <p>
              <strong>Status:</strong> ${status}
            </p>

          </div>
        </div>
      `,
    });

    // EMAIL CLIENTE

    await resend.emails.send({

      from:
        'IncentiVou <noreply@incentivou.com.br>',

      to: [email],

      subject:
        'Recebemos seu diagnóstico',

      html: `
        <div style="font-family:Arial;padding:40px;background:#f4f8ff;">
          <div style="max-width:700px;background:white;border-radius:24px;padding:40px;margin:auto;">

            <h1 style="color:#082252;">
              ${organizacao},
              seu projeto possui potencial.
            </h1>

            <p style="font-size:18px;color:#61708a;line-height:1.7;">
              Nossa equipe irá analisar seu perfil
              e apresentar oportunidades reais
              de captação incentivada.
            </p>

            <div style="margin-top:30px;padding:24px;border-radius:24px;background:#effff5;border:1px solid #c8f5df;">

              <span style="color:#61708a;">
                Status atual
              </span>

              <h2 style="color:#14c784;font-size:42px;margin-top:10px;">
                ${status}
              </h2>

            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        error: 'Erro interno',
      },
      {
        status: 500,
      }
    );

  }

}