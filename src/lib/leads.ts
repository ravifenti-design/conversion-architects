type LeadPayload = {
  nome: string;
  whatsapp: string;
  empresa: string;
  objetivo: string;
};

export type Lead = {
  id?: string;
  created_at?: string;
  nome: string;
  whatsapp: string;
  empresa?: string;
  objetivo?: string;
  source?: string;
};

type SaveLeadResult =
  | { status: "saved" }
  | { status: "skipped"; reason: "missing-config" };

function cleanText(value: string): string {
  return value.trim().slice(0, 1000);
}

function getSupabaseConfig() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const tableName = import.meta.env.VITE_SUPABASE_LEADS_TABLE || "leads";

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return { supabaseUrl, supabaseAnonKey, tableName };
}

export async function saveLead(payload: LeadPayload): Promise<SaveLeadResult> {
  const config = getSupabaseConfig();

  if (!config) {
    return { status: "skipped", reason: "missing-config" };
  }

  const response = await fetch(`${config.supabaseUrl}/rest/v1/${config.tableName}`, {
    method: "POST",
    headers: {
      apikey: config.supabaseAnonKey,
      authorization: `Bearer ${config.supabaseAnonKey}`,
      "content-type": "application/json",
      prefer: "return=minimal",
    },
    body: JSON.stringify({
      nome: cleanText(payload.nome),
      whatsapp: cleanText(payload.whatsapp),
      empresa: cleanText(payload.empresa),
      objetivo: cleanText(payload.objetivo),
      source: "landing-page-voc",
    }),
  });

  if (!response.ok) {
    throw new Error("Lead save failed");
  }

  return { status: "saved" };
}

export async function listAdminLeads(username: string, password: string): Promise<Lead[]> {
  const functionUrl = import.meta.env.VITE_ADMIN_LEADS_FUNCTION_URL;

  if (!functionUrl) {
    throw new Error("Admin leads function URL is missing.");
  }

  const response = await fetch(functionUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Could not load leads.");
  }

  const payload = (await response.json()) as { leads?: Lead[] };
  return payload.leads ?? [];
}
