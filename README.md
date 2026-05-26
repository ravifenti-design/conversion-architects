# VOC Comunicações Landing Page

Landing page em React, Vite, TanStack Start e Tailwind CSS.

## Rodar localmente

```bash
bun install
bun run dev
```

## Publicar pelo Lovable/GitHub

1. Suba este projeto para um repositório no GitHub.
2. No Lovable, conecte ou importe o projeto pelo GitHub.
3. Configure as variáveis de ambiente abaixo no Lovable antes de publicar, se quiser salvar leads no Supabase.
4. Publique pelo Lovable.

## Salvamento de leads

O formulário salva leads no Supabase usando a API REST pública com a chave anon.
Crie uma tabela chamada `leads` no Supabase com estas colunas:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  whatsapp text not null,
  empresa text,
  objetivo text,
  source text
);
```

Depois configure as variáveis:

```bash
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-publica
VITE_SUPABASE_LEADS_TABLE=leads
VITE_ADMIN_LEADS_USER=admin
VITE_ADMIN_LEADS_PASSWORD=troque-essa-senha
```

Se essas variáveis não estiverem configuradas, o formulário ainda abre o WhatsApp, mas não salva o lead no banco.

## Painel de leads

Acesse `/adminleads` no mesmo domínio da landing para ver os leads em tabela.
O painel usa `VITE_ADMIN_LEADS_USER` e `VITE_ADMIN_LEADS_PASSWORD` para o login simples.

Importante: esse login é uma proteção simples no front-end. Para dados sensíveis ou maior segurança,
use Supabase Auth ou uma área administrativa protegida por autenticação real.
