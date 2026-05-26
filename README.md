# IncentiVou Site

Site institucional completo da IncentiVou, criado em Next.js, pronto para validar em localhost e subir na Vercel.

## Como rodar no VS Code

```bash
npm install
npm run dev
```

Abra:

```bash
http://localhost:3000
```

## Build local

```bash
npm run build
```

## Subir para GitHub

```bash
git init
git add .
git commit -m "site inicial incentivou"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Subir na Vercel

1. Entre na Vercel
2. New Project
3. Import Git Repository
4. Selecione o repositório
5. Framework: Next.js
6. Deploy

## Variáveis de ambiente para Supabase

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=SUA_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=SUA_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=SUA_SERVICE_ROLE_KEY
```

## SQL sugerido para leads no Supabase

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  email text not null,
  telefone text,
  perfil text not null,
  mensagem text,
  origem text default 'site-incentivou'
);

alter table public.leads enable row level security;

create policy "service role can manage leads"
on public.leads
for all
to service_role
using (true)
with check (true);
```

## Estrutura de páginas

- `/` Home
- `/solucoes`
- `/empresas`
- `/executores`
- `/plataforma`
- `/sobre`
- `/blog`
- `/contato`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Observações

- O site usa o padrão visual claro/premium aprovado para a IncentiVou.
- O formulário de contato já está preparado para salvar leads no Supabase quando as variáveis forem configuradas.
- As imagens da marca foram colocadas em `public/images`.
