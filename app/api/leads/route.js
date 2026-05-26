export async function POST(request) {
  const data = await request.json();

  const comercialEmail = process.env.COMERCIAL_EMAIL || 'comercial@incentivou.com.br';
  const resendKey = process.env.RESEND_API_KEY;

  const html = `
    <h2>Novo lead - Simulador Empresas</h2>
    <p><strong>Nome:</strong> ${data.nome}</p>
    <p><strong>Empresa:</strong> ${data.empresa}</p>
    <p><strong>E-mail:</strong> ${data.email}</p>
    <p><strong>Telefone:</strong> ${data.telefone}</p>
    <p><strong>Regime:</strong> ${data.regime}</p>
    <p><strong>IR devido anual:</strong> ${data.ir}</p>
    <p><strong>Estado:</strong> ${data.estado}</p>
    <p><strong>Potencial estimado:</strong> ${Number(data.potencial || 0).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}</p>
  `;

  if (resendKey) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IncentiVou <noreply@incentivou.com.br>',
        to: [comercialEmail],
        subject: 'Novo lead - Simulador Empresas',
        html,
      }),
    });
  }

  return Response.json({ ok: true });
}