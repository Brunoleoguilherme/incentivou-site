import { createClient } from '@supabase/supabase-js';

/*
|--------------------------------------------------------------------------
| CLIENT SIDE
|--------------------------------------------------------------------------
| Usado no frontend:
| login, dashboard, formulários etc.
*/

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/*
|--------------------------------------------------------------------------
| SERVER SIDE
|--------------------------------------------------------------------------
| Usado em APIs/server actions
*/

export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}