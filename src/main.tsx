import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AdminLeads from "@/routes/adminleads";
import LandingPage from "@/routes/index";
import "./styles.css";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/adminleads") {
    document.title = "Admin Leads | VOC Comunicações";
    return <AdminLeads />;
  }

  document.title = "VOC Comunicações | Landing Pages de Alta Conversão";
  return <LandingPage />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
