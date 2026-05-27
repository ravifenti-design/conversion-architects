# VOC Comunicações Landing Page

Projeto em Vite + React, enxuto para o Lovable, com apenas duas páginas:

- `/` - landing page principal da VOC Comunicações.
- `/adminleads` - página simples para visualizar os leads enviados pelo formulário.

## Funcionamento atual

O formulário da landing abre o WhatsApp da VOC e salva uma cópia temporária do lead no próprio navegador.
Por enquanto não há integração com Supabase, API externa ou banco de dados.

Quando o banco for reconfigurado, a camada de leads fica em `src/lib/leads.ts`.

## Rodar localmente

```bash
npm install
npm run dev
```

## Publicar pelo Lovable

1. Suba este projeto para o GitHub.
2. No Lovable, conecte ou atualize pelo GitHub.
3. Publique a página.

Não há variáveis de ambiente obrigatórias nesta versão.
Não há TanStack Start, SSR, Cloudflare/Wrangler ou Supabase configurados nesta versão.
