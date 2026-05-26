type LeadPayload = {
  nome: string;
  whatsapp: string;
  empresa: string;
  objetivo: string;
};

type SaveLeadResult =
  | { status: "saved" }
  | { status: "skipped"; reason: "missing-config" };

function cleanText(value: string): string {
  return value.trim().slice(0, 1000);
}

export async function saveLead(payload: LeadPayload): Promise<SaveLeadResult> {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const tableName = import.meta.env.VITE_SUPABASE_LEADS_TABLE || "leads";

  if (!supabaseUrl || !supabaseAnonKey) {
    return { status: "skipped", reason: "missing-config" };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      authorization: `Bearer ${supabaseAnonKey}`,
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
