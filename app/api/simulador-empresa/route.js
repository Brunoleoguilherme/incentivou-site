import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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

    const { error } = await supabase
      .from("simulacoes_empresas")
      .insert([
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
      console.log(error);

      return NextResponse.json(
        { error: "Erro ao salvar simulação" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { error: "Erro interno" },
      { status: 500 }
    );
  }
}