-- Lock down the leads table: anon can only INSERT (form submissions).
-- Admin reads happen via the admin-leads edge function using the service role.

ALTER TABLE IF EXISTS public.leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Permitir inserir leads pelo site" ON public.leads;
DROP POLICY IF EXISTS "Permitir listar leads no painel" ON public.leads;
DROP POLICY IF EXISTS "anon_insert_leads" ON public.leads;
DROP POLICY IF EXISTS "admin_read_leads" ON public.leads;

CREATE POLICY "anon_insert_leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

REVOKE ALL ON public.leads FROM anon, authenticated;
GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;
