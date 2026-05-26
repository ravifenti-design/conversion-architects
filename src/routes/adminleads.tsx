import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, RefreshCw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Lead, listLeads } from "@/lib/leads";

export const Route = createFileRoute("/adminleads")({
  component: AdminLeads,
  head: () => ({
    meta: [{ title: "Admin Leads | VOC Comunicações" }],
  }),
});

const AUTH_STORAGE_KEY = "voc-adminleads-authenticated";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  return digits.startsWith("55") ? digits : `55${digits}`;
}

function formatDate(value?: string): string {
  if (!value) return "-";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(value));
}

function AdminLeads() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");

  const credentials = useMemo(
    () => ({
      username: import.meta.env.VITE_ADMIN_LEADS_USER || "admin",
      password: import.meta.env.VITE_ADMIN_LEADS_PASSWORD || "admin",
    }),
    [],
  );

  useEffect(() => {
    setIsAuthenticated(sessionStorage.getItem(AUTH_STORAGE_KEY) === "true");
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      void loadLeads();
    }
  }, [isAuthenticated]);

  async function loadLeads() {
    setLoading(true);
    setLoadError("");
    try {
      setLeads(await listLeads());
    } catch (error) {
      console.error(error);
      setLoadError(
        "Não foi possível carregar os leads. Confira as variáveis do Supabase no Lovable.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === credentials.username && password === credentials.password) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setLoginError("");
      return;
    }

    setLoginError("Login ou senha incorretos.");
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
        >
          <h1 className="text-2xl font-bold">Admin Leads</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Acesse para visualizar os contatos recebidos pela landing page.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Login
              </label>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Senha
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <p className="text-sm text-destructive">{loginError}</p>}
            <Button type="submit" className="h-11 w-full font-bold">
              Entrar
            </Button>
          </div>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Leads recebidos</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Contatos enviados pelo formulário da landing page.
            </p>
          </div>
          <Button onClick={loadLeads} disabled={loading} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            {loading ? "Atualizando..." : "Atualizar"}
          </Button>
        </div>

        {loadError && (
          <div className="mt-6 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {loadError}
          </div>
        )}

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="border-b border-border bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3">Nome</th>
                <th className="px-4 py-3">WhatsApp</th>
                <th className="px-4 py-3">Empresa</th>
                <th className="px-4 py-3">Objetivo</th>
                <th className="px-4 py-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => {
                const phone = normalizePhone(lead.whatsapp);
                return (
                  <tr key={lead.id ?? `${lead.whatsapp}-${index}`} className="border-b border-border/60 last:border-b-0">
                    <td className="px-4 py-4 text-muted-foreground">{formatDate(lead.created_at)}</td>
                    <td className="px-4 py-4 font-semibold">{lead.nome}</td>
                    <td className="px-4 py-4">{lead.whatsapp}</td>
                    <td className="px-4 py-4">{lead.empresa || "-"}</td>
                    <td className="max-w-md px-4 py-4 text-muted-foreground">{lead.objetivo || "-"}</td>
                    <td className="px-4 py-4 text-right">
                      <Button
                        asChild
                        size="sm"
                        className="bg-green-600 font-bold text-white hover:bg-green-700"
                        disabled={!phone}
                      >
                        <a
                          href={`https://wa.me/${phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {!loading && leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                    Nenhum lead encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
