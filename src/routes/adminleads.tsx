import { ArrowLeft, LockKeyhole, LogOut, MessageCircle, RefreshCw, Trash2 } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Lead, clearAdminLeads, listAdminLeads } from "@/lib/leads";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "voc2026";
const ADMIN_SESSION_KEY = "voc-admin-authenticated";

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

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  async function loadLeads() {
    setLeads(await listAdminLeads());
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.trim() !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      setLoginError("Usuário ou senha incorretos.");
      return;
    }

    window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    setIsAuthenticated(true);
    setLoginError("");
    setPassword("");
  }

  function handleLogout() {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setLeads([]);
    setUsername("");
    setPassword("");
  }

  async function handleClear() {
    await clearAdminLeads();
    setLeads([]);
  }

  useEffect(() => {
    if (window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      void loadLeads();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 py-10 text-foreground">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <Button asChild variant="ghost" className="-ml-3 mb-6">
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a landing
            </a>
          </Button>

          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Acesso aos leads</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre com usuário e senha para visualizar os contatos recebidos.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label htmlFor="admin-username" className="mb-2 block text-sm font-semibold">
                Usuário
              </label>
              <Input
                id="admin-username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Digite o usuário"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold">
                Senha
              </label>
              <Input
                id="admin-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite a senha"
              />
            </div>
            {loginError && (
              <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {loginError}
              </p>
            )}
            <Button type="submit" className="h-11 w-full font-semibold">
              Entrar
            </Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Button asChild variant="ghost" className="-ml-3 mb-4">
              <a href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para a landing
              </a>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight">Leads recebidos</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Contatos enviados pelo formulário. Por enquanto, os dados ficam salvos
              temporariamente neste navegador até reconfigurarmos o banco de dados.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={loadLeads} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Atualizar
            </Button>
            <Button onClick={handleClear} variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              Limpar lista
            </Button>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>

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
              {leads.map((lead) => {
                const phone = normalizePhone(lead.whatsapp);
                return (
                  <tr key={lead.id} className="border-b border-border/60 last:border-b-0">
                    <td className="px-4 py-4 text-muted-foreground">
                      {formatDate(lead.created_at)}
                    </td>
                    <td className="px-4 py-4 font-semibold">{lead.nome}</td>
                    <td className="px-4 py-4">{lead.whatsapp}</td>
                    <td className="px-4 py-4">{lead.empresa || "-"}</td>
                    <td className="max-w-md px-4 py-4 text-muted-foreground">
                      {lead.objetivo || "-"}
                    </td>
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
              {leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted-foreground">
                    Nenhum lead encontrado ainda.
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
