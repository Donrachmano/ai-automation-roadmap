import { useState } from "react";

const phases = [
  {
    id: 1,
    code: "F-01",
    title: "Fondasi Data & API",
    duration: "Bulan 1 – 2",
    color: "#00e5ff",
    status: "START HERE",
    goal: "Memahami bahasa kerja semua automation tools",
    topics: [
      {
        week: "Minggu 1–2",
        title: "JSON Mastery",
        items: [
          "Apa itu JSON dan kenapa ini penting",
          "Struktur: Object, Array, Nested",
          "Parsing & stringify JSON",
          "JSON di dunia nyata (API response)",
          "Latihan: baca & tulis 20 JSON structure berbeda",
        ],
        project: "Buat 10 JSON template untuk skenario bisnis nyata",
      },
      {
        week: "Minggu 3–4",
        title: "REST API Fundamentals",
        items: [
          "HTTP Methods: GET, POST, PUT, DELETE",
          "Request & Response structure",
          "Headers, Body, Status Codes",
          "Authentication: API Key, Bearer Token",
          "Tools: Postman / Thunder Client",
        ],
        project: "Konsumsi 5 public API berbeda (weather, news, currency, dll)",
      },
      {
        week: "Minggu 5–8",
        title: "Webhook & Advanced API",
        items: [
          "Perbedaan REST API vs Webhook",
          "Trigger-based vs polling",
          "Testing webhook dengan Webhook.site",
          "API rate limiting & error handling",
          "Dokumentasi API (Swagger, Postman docs)",
        ],
        project: "Buat dokumentasi API untuk 3 layanan berbeda",
      },
    ],
    milestone: "Bisa membaca, memahami & mengonsumsi REST API apapun secara mandiri",
    tools: ["Postman", "Webhook.site", "JSONFormatter", "Hoppscotch"],
  },
  {
    id: 2,
    code: "F-02",
    title: "JavaScript untuk Automation",
    duration: "Bulan 2 – 4",
    color: "#ffeb3b",
    status: "CORE SKILL",
    goal: "Bukan jadi programmer JS — tapi bisa menulis logic di n8n Code Node",
    topics: [
      {
        week: "Minggu 1–3",
        title: "JS Dasar yang Relevan",
        items: [
          "Variables: let, const (skip var)",
          "Data types: string, number, boolean, null",
          "Object & Array manipulation",
          "Template literals (string formatting)",
          "Conditional: if/else, ternary",
        ],
        project: "20 latihan manipulasi data JSON dengan JS",
      },
      {
        week: "Minggu 4–5",
        title: "Functions & Logic",
        items: [
          "Function declaration & arrow function",
          "Array methods: map, filter, find, forEach",
          "Object destructuring",
          "Spread operator",
          "Optional chaining (?.) untuk data aman",
        ],
        project: "Transform 5 API response menjadi format yang dibutuhkan",
      },
      {
        week: "Minggu 6–8",
        title: "JS untuk Automation Context",
        items: [
          "Async/Await dasar",
          "fetch() untuk HTTP request",
          "Error handling: try/catch",
          "Date & time manipulation",
          "Regex dasar untuk parsing data",
        ],
        project: "Buat script JS yang ambil data API, proses, format output",
      },
    ],
    milestone: "Bisa menulis custom code di n8n Code Node tanpa harus Google setiap syntax",
    tools: ["Browser Console", "Node.js", "VS Code", "Replit"],
  },
  {
    id: 3,
    code: "F-03",
    title: "n8n Mastery",
    duration: "Bulan 3 – 6",
    color: "#69db7c",
    status: "MAIN WEAPON",
    goal: "Menguasai tool utama yang akan menghasilkan uang",
    topics: [
      {
        week: "Minggu 1–2",
        title: "Setup & Core Nodes",
        items: [
          "Instalasi n8n (cloud & self-hosted)",
          "Interface & konsep dasar workflow",
          "Node utama: HTTP Request, Set, IF, Merge",
          "Trigger: Manual, Schedule, Webhook",
          "Debug & execution log",
        ],
        project: "Buat 3 workflow dasar: data fetch, transform, output",
      },
      {
        week: "Minggu 3–5",
        title: "Integrasi Business Tools",
        items: [
          "Google Sheets: baca, tulis, update",
          "Gmail & Outlook: kirim email otomatis",
          "Slack & Telegram: notifikasi & bot",
          "Airtable: database automation",
          "Error handling & fallback workflow",
        ],
        project: "Lead management system: Form, Sheet, Email, Slack notif",
      },
      {
        week: "Minggu 6–8",
        title: "Advanced n8n",
        items: [
          "Sub-workflows & modularity",
          "Loop & batching data",
          "Expressions & n8n formula",
          "Custom variables & environments",
          "Production deployment & monitoring",
        ],
        project: "CRM automation lengkap dengan error handling & logging",
      },
      {
        week: "Minggu 9–12",
        title: "AI Nodes di n8n",
        items: [
          "OpenAI & Anthropic nodes",
          "AI Agent node: planning & execution",
          "Memory & context management",
          "Document processing (PDF, Word)",
          "Multi-step AI workflow",
        ],
        project: "AI-powered customer support workflow otomatis",
      },
    ],
    milestone: "Punya 5+ production-ready workflow yang bisa ditunjukkan ke klien",
    tools: ["n8n Cloud", "n8n Self-hosted", "Railway/Render", "Cloudflare"],
  },
  {
    id: 4,
    code: "F-04",
    title: "AI Integration & Specialization",
    duration: "Bulan 6 – 10",
    color: "#da77f2",
    status: "DIFFERENTIATOR",
    goal: "Yang membedakan kamu dari automation engineer biasa",
    topics: [
      {
        week: "Minggu 1–3",
        title: "LLM API Mastery",
        items: [
          "Anthropic Claude API: messages, system prompt",
          "OpenAI API: completions, embeddings",
          "Prompt engineering advanced",
          "Structured output & JSON mode",
          "Token management & cost optimization",
        ],
        project: "Document intelligence system: upload dokumen, extract, summarize",
      },
      {
        week: "Minggu 4–6",
        title: "Agentic Workflows",
        items: [
          "AI Agent design patterns",
          "Tool calling & function calling",
          "Multi-agent orchestration",
          "Human-in-the-loop design",
          "Agent memory: short & long term",
        ],
        project: "Research agent: input topik, riset web, buat laporan otomatis",
      },
      {
        week: "Minggu 7–10",
        title: "Niche Specialization",
        items: [
          "Pilih 1-2 niche vertikal (CRM / Content / Finance)",
          "Bangun workflow template untuk niche tersebut",
          "Pricing & packaging solusi",
          "Case study dokumentasi",
          "Portfolio presentation",
        ],
        project: "Paket solusi lengkap untuk 1 industri spesifik",
      },
    ],
    milestone: "Punya unique selling point yang jelas di pasar remote",
    tools: ["Claude API", "OpenAI API", "LangChain basics", "Supabase"],
  },
  {
    id: 5,
    code: "F-05",
    title: "Market Entry & Income",
    duration: "Bulan 10 – 18",
    color: "#ff8c42",
    status: "MONETIZE",
    goal: "Konversi skill menjadi income remote yang konsisten",
    topics: [
      {
        week: "Bulan 10–11",
        title: "Portfolio & Personal Brand",
        items: [
          "GitHub portfolio: workflow as code",
          "Loom demo video untuk setiap proyek",
          "LinkedIn optimization (EN)",
          "Upwork profile setup & niche positioning",
          "Case study: problem, solution, result",
        ],
        project: "5 portfolio piece dengan dokumentasi lengkap",
      },
      {
        week: "Bulan 12–14",
        title: "Client Acquisition",
        items: [
          "Upwork proposal strategy",
          "Cold outreach via LinkedIn",
          "Discovery call framework",
          "Scoping & pricing automation project",
          "Contract & deliverable standar",
        ],
        project: "3 klien pertama (bisa pro bono / discounted untuk review)",
      },
      {
        week: "Bulan 15–18",
        title: "Scaling & SaaS Prep",
        items: [
          "Retainer model vs project-based",
          "Productized service: paket standar",
          "Dokumentasi untuk tim / VA",
          "Identifikasi pain point untuk SaaS",
          "MVP planning: validasi sebelum build",
        ],
        project: "Rencana bisnis SaaS berbasis pengalaman nyata dari klien",
      },
    ],
    milestone: "$2.000+/bulan dari remote — modal & pengalaman untuk SaaS",
    tools: ["Upwork", "LinkedIn", "Loom", "Notion", "Stripe"],
  },
];

const modules = [
  {
    phase: "F-01",
    phaseTitle: "Fondasi Data & API",
    color: "#00e5ff",
    sessions: [
      {
        code: "F-01 · Sesi 1",
        title: "JSON Mastery",
        file: "f01-sesi1-json-mastery.html",
        status: "done",
      },
      {
        code: "F-01 · Sesi 2",
        title: "REST API Fundamentals",
        file: "f01-sesi2-rest-api.html",
        status: "done",
      },
      {
        code: "F-01 · Sesi 3",
        title: "Webhook & Advanced API",
        file: "f01-sesi3-webhook-advanced-api-sesi3.html",
        status: "done",
      },
    ],
  },
  {
    phase: "F-02",
    phaseTitle: "JavaScript untuk Automation",
    color: "#ffeb3b",
    sessions: [
      {
        code: "F-02 · Sesi 1",
        title: "JS Dasar yang Relevan",
        file: "f02-sesi1-js-dasar.html",
        status: "done",
      },
      {
        code: "F-02 · Sesi 2",
        title: "Functions & Logic",
        file: "f02-sesi2-functions-logic.html",
        status: "done",
      },
      {
        code: "F-02 · Sesi 3",
        title: "JS untuk Automation Context",
        file: "f02-sesi3-js-automation-context.html",
        status: "done",
      },
    ],
  },
  {
    phase: "F-03",
    phaseTitle: "n8n Mastery",
    color: "#69db7c",
    sessions: [
      { code: "F-03 · Sesi 1", title: "Setup & Core Nodes", file: "f03-sesi1-setup-core-nodes.html", status: "done" },
      { code: "F-03 · Sesi 2", title: "Integrasi Business Tools", file: "f03-sesi2-integrasi-business-tools.html", status: "done" },
      { code: "F-03 · Sesi 3", title: "Advanced n8n", file: "f03-sesi3-advanced-n8n.html", status: "done" },
      { code: "F-03 · Sesi 4", title: "AI Nodes di n8n", file: "f03-sesi4-ai-nodes.html", status: "done" },
    ],
  },
  {
    phase: "F-04",
    phaseTitle: "AI Integration & Specialization",
    color: "#da77f2",
    sessions: [
      { code: "F-04 · Sesi 1", title: "LLM API Mastery", file: null, status: "soon" },
      { code: "F-04 · Sesi 2", title: "Agentic Workflows", file: null, status: "soon" },
      { code: "F-04 · Sesi 3", title: "Niche Specialization", file: null, status: "soon" },
    ],
  },
  {
    phase: "F-05",
    phaseTitle: "Market Entry & Income",
    color: "#ff8c42",
    sessions: [
      { code: "F-05 · Sesi 1", title: "Portfolio & Personal Brand", file: null, status: "soon" },
      { code: "F-05 · Sesi 2", title: "Client Acquisition", file: null, status: "soon" },
      { code: "F-05 · Sesi 3", title: "Scaling & SaaS Prep", file: null, status: "soon" },
    ],
  },
];

const overview = [
  { label: "Total Durasi", value: "12-18 Bulan", icon: "⏱" },
  { label: "Jam per Hari", value: "1-2 Jam", icon: "📅" },
  { label: "Target Income", value: "$2K+/bulan", icon: "💵" },
  { label: "Tools Utama", value: "n8n + AI API", icon: "🛠" },
  { label: "Platform Remote", value: "Upwork + LinkedIn", icon: "🌐" },
  { label: "End Game", value: "AI SaaS Founder", icon: "🚀" },
];

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);
  const [activeTab, setActiveTab] = useState("roadmap");
  const [expandedTopic, setExpandedTopic] = useState(null);

  const phase = phases[activePhase];

  const doneCount = modules.reduce((acc, m) => acc + m.sessions.filter(s => s.status === "done").length, 0);
  const totalCount = modules.reduce((acc, m) => acc + m.sessions.length, 0);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#080c10",
      fontFamily: "'Courier New', 'Lucida Console', monospace",
      color: "#c9d1d9",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1e3a4a",
        padding: "20px 24px 16px",
        background: "linear-gradient(180deg, #0d1f2d 0%, #080c10 100%)",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#00e5ff", boxShadow: "0 0 8px #00e5ff",
            animation: "pulse 2s infinite",
          }} />
          <span style={{ color: "#00e5ff", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase" }}>
            AI AUTOMATION BOOTCAMP
          </span>
        </div>
        <h1 style={{ margin: "0", fontSize: "clamp(16px, 4vw, 22px)", fontWeight: "700", color: "#e6edf3", letterSpacing: "1px" }}>
          ROADMAP & KURIKULUM LENGKAP
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#6e7681" }}>
          Non-IT Background → AI Automation Expert → Remote Income
        </p>
      </div>

      {/* Tab Nav */}
      <div style={{ display: "flex", borderBottom: "1px solid #1e3a4a", padding: "0 24px", background: "#0a0f14" }}>
        {["roadmap", "kurikulum", "modul"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "12px 16px", border: "none", background: "none",
            color: activeTab === tab ? "#00e5ff" : "#6e7681",
            borderBottom: activeTab === tab ? "2px solid #00e5ff" : "2px solid transparent",
            cursor: "pointer", fontSize: "11px", letterSpacing: "2px",
            textTransform: "uppercase", fontFamily: "inherit", transition: "all 0.2s",
          }}>
            {tab === "roadmap" ? "⬡ ROADMAP" : tab === "kurikulum" ? "≡ KURIKULUM" : "▣ MODUL"}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 20px 40px" }}>

        {/* ── ROADMAP TAB ── */}
        {activeTab === "roadmap" && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "24px" }}>
              {overview.map((item, i) => (
                <div key={i} style={{
                  background: "#0d1f2d", border: "1px solid #1e3a4a",
                  borderRadius: "6px", padding: "10px", textAlign: "center",
                }}>
                  <div style={{ fontSize: "18px", marginBottom: "2px" }}>{item.icon}</div>
                  <div style={{ fontSize: "10px", fontWeight: "700", color: "#e6edf3", lineHeight: "1.2" }}>{item.value}</div>
                  <div style={{ fontSize: "9px", color: "#6e7681", marginTop: "2px" }}>{item.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "2px", marginBottom: "12px" }}>◈ FASE PEMBELAJARAN</div>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", left: "19px", top: "20px", bottom: "20px", width: "1px",
                  background: "linear-gradient(180deg, #00e5ff, #ff8c42)", opacity: 0.3,
                }} />
                {phases.map((p, i) => (
                  <div key={p.id} onClick={() => { setActivePhase(i); setActiveTab("kurikulum"); }}
                    style={{ display: "flex", gap: "14px", marginBottom: "12px", cursor: "pointer" }}>
                    <div style={{
                      width: "38px", height: "38px", borderRadius: "6px",
                      background: activePhase === i ? p.color + "22" : "#0d1f2d",
                      border: `1.5px solid ${p.color}`, display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0,
                      boxShadow: activePhase === i ? `0 0 12px ${p.color}66` : "none",
                      transition: "all 0.2s",
                    }}>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: p.color }}>{p.id}</span>
                    </div>
                    <div style={{
                      flex: 1, background: "#0d1f2d",
                      border: `1px solid ${activePhase === i ? p.color + "66" : "#1e3a4a"}`,
                      borderRadius: "8px", padding: "10px 14px", transition: "all 0.2s",
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <div style={{ fontSize: "9px", color: p.color, letterSpacing: "2px", marginBottom: "2px" }}>
                            {p.code} · {p.status}
                          </div>
                          <div style={{ fontSize: "13px", fontWeight: "700", color: "#e6edf3" }}>{p.title}</div>
                        </div>
                        <div style={{ fontSize: "9px", color: "#6e7681", textAlign: "right", marginTop: "2px" }}>{p.duration}</div>
                      </div>
                      <div style={{ fontSize: "10px", color: "#8b949e", marginTop: "5px", lineHeight: "1.4" }}>{p.goal}</div>
                      <div style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #1e3a4a", fontSize: "10px", color: p.color + "cc" }}>
                        ✓ {p.milestone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "#0d2a1a", border: "1px solid #2ea04326", borderLeft: "3px solid #3fb950", borderRadius: "6px", padding: "14px" }}>
              <div style={{ fontSize: "10px", color: "#3fb950", letterSpacing: "2px", marginBottom: "8px" }}>◈ STRATEGI MENTOR</div>
              <p style={{ margin: "0 0 6px", fontSize: "11px", lineHeight: "1.6", color: "#c9d1d9" }}>
                Fase 1-3 berjalan <span style={{ color: "#ffeb3b" }}>paralel sebagian</span> — tidak perlu selesai 100% JSON sebelum mulai n8n.
              </p>
              <p style={{ margin: "0", fontSize: "11px", lineHeight: "1.6", color: "#8b949e" }}>
                Setiap akhir fase ada <span style={{ color: "#00e5ff" }}>checkpoint review</span> sebelum lanjut ke fase berikutnya.
              </p>
            </div>
          </>
        )}

        {/* ── KURIKULUM TAB ── */}
        {activeTab === "kurikulum" && (
          <>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "2px", marginBottom: "10px" }}>◈ PILIH FASE</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {phases.map((p, i) => (
                  <button key={p.id} onClick={() => { setActivePhase(i); setExpandedTopic(null); }} style={{
                    padding: "6px 12px",
                    border: `1px solid ${activePhase === i ? p.color : "#1e3a4a"}`,
                    background: activePhase === i ? p.color + "22" : "#0d1f2d",
                    color: activePhase === i ? p.color : "#6e7681",
                    borderRadius: "4px", cursor: "pointer", fontSize: "10px",
                    letterSpacing: "1px", fontFamily: "inherit",
                    boxShadow: activePhase === i ? `0 0 8px ${p.color}44` : "none",
                    transition: "all 0.2s",
                  }}>{p.code}</button>
                ))}
              </div>
            </div>

            <div style={{ background: phase.color + "11", border: `1px solid ${phase.color}44`, borderRadius: "8px", padding: "16px", marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", color: phase.color, letterSpacing: "2px", marginBottom: "4px" }}>
                {phase.code} · {phase.status} · {phase.duration}
              </div>
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#e6edf3" }}>{phase.title}</div>
              <p style={{ margin: "10px 0 0", fontSize: "11px", color: "#8b949e", lineHeight: "1.5" }}>🎯 {phase.goal}</p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "2px", marginBottom: "10px" }}>◈ MATERI PEMBELAJARAN</div>
              {phase.topics.map((topic, i) => (
                <div key={i} style={{ marginBottom: "8px" }}>
                  <button onClick={() => setExpandedTopic(expandedTopic === i ? null : i)} style={{
                    width: "100%", textAlign: "left",
                    background: expandedTopic === i ? "#0d1f2d" : "#0a0f14",
                    border: `1px solid ${expandedTopic === i ? phase.color + "66" : "#1e3a4a"}`,
                    borderRadius: "6px", padding: "12px 14px",
                    cursor: "pointer", color: "inherit", fontFamily: "inherit", transition: "all 0.2s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: "9px", color: phase.color, letterSpacing: "1px" }}>{topic.week}</span>
                        <div style={{ fontSize: "13px", color: "#e6edf3", fontWeight: "600", marginTop: "2px" }}>{topic.title}</div>
                      </div>
                      <span style={{ color: phase.color, fontSize: "16px" }}>{expandedTopic === i ? "−" : "+"}</span>
                    </div>
                  </button>
                  {expandedTopic === i && (
                    <div style={{
                      background: "#0d1f2d", border: `1px solid ${phase.color}33`,
                      borderTop: "none", borderRadius: "0 0 6px 6px", padding: "14px",
                    }}>
                      <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "1px", marginBottom: "8px" }}>MATERI:</div>
                      {topic.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "6px", fontSize: "11px", color: "#c9d1d9", lineHeight: "1.4" }}>
                          <span style={{ color: phase.color, flexShrink: 0 }}>›</span>
                          <span>{item}</span>
                        </div>
                      ))}
                      <div style={{ marginTop: "12px", padding: "10px", background: phase.color + "11", border: `1px solid ${phase.color}33`, borderRadius: "4px" }}>
                        <div style={{ fontSize: "9px", color: phase.color, letterSpacing: "1px", marginBottom: "4px" }}>◈ PROJECT PRAKTIK</div>
                        <div style={{ fontSize: "11px", color: "#e6edf3", lineHeight: "1.4" }}>{topic.project}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: "#0d2a1a", border: "1px solid #2ea04326", borderLeft: `3px solid ${phase.color}`, borderRadius: "6px", padding: "14px", marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", color: phase.color, letterSpacing: "2px", marginBottom: "6px" }}>◈ MILESTONE FASE INI</div>
              <div style={{ fontSize: "12px", color: "#e6edf3", lineHeight: "1.5" }}>✓ {phase.milestone}</div>
            </div>

            <div>
              <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "2px", marginBottom: "10px" }}>◈ TOOLS</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {phase.tools.map((tool, i) => (
                  <span key={i} style={{ padding: "4px 10px", background: "#0d1f2d", border: "1px solid #1e3a4a", borderRadius: "4px", fontSize: "10px", color: "#8b949e" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", gap: "10px" }}>
              <button onClick={() => { setActivePhase(Math.max(0, activePhase - 1)); setExpandedTopic(null); }} disabled={activePhase === 0} style={{
                flex: 1, padding: "10px",
                background: activePhase === 0 ? "#0a0f14" : "#0d1f2d",
                border: "1px solid #1e3a4a",
                color: activePhase === 0 ? "#3d444d" : "#c9d1d9",
                borderRadius: "6px", cursor: activePhase === 0 ? "default" : "pointer",
                fontSize: "11px", fontFamily: "inherit",
              }}>← FASE SEBELUMNYA</button>
              <button onClick={() => { setActivePhase(Math.min(phases.length - 1, activePhase + 1)); setExpandedTopic(null); }} disabled={activePhase === phases.length - 1} style={{
                flex: 1, padding: "10px",
                background: activePhase === phases.length - 1 ? "#0a0f14" : phase.color + "22",
                border: `1px solid ${activePhase === phases.length - 1 ? "#1e3a4a" : phase.color + "66"}`,
                color: activePhase === phases.length - 1 ? "#3d444d" : phase.color,
                borderRadius: "6px", cursor: activePhase === phases.length - 1 ? "default" : "pointer",
                fontSize: "11px", fontFamily: "inherit",
              }}>FASE BERIKUTNYA →</button>
            </div>
          </>
        )}

        {/* ── MODUL TAB ── */}
        {activeTab === "modul" && (
          <>
            {/* Progress bar */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ fontSize: "10px", color: "#6e7681", letterSpacing: "2px" }}>◈ PROGRESS KESELURUHAN</div>
                <div style={{ fontSize: "10px", color: "#00e5ff" }}>{doneCount}/{totalCount} SESI</div>
              </div>
              <div style={{ background: "#0d1f2d", borderRadius: "4px", height: "6px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: "4px",
                  width: `${(doneCount / totalCount) * 100}%`,
                  background: "linear-gradient(90deg, #00e5ff, #ffeb3b)",
                  transition: "width 0.5s ease",
                }} />
              </div>
              <div style={{ fontSize: "9px", color: "#6e7681", marginTop: "4px", textAlign: "right" }}>
                {Math.round((doneCount / totalCount) * 100)}% selesai
              </div>
            </div>

            {/* Module list by phase */}
            {modules.map((m, mi) => (
              <div key={mi} style={{ marginBottom: "16px" }}>
                {/* Phase header */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  marginBottom: "8px", paddingBottom: "8px",
                  borderBottom: `1px solid ${m.color}33`,
                }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "4px",
                    background: m.color + "22", border: `1px solid ${m.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "10px", fontWeight: "700", color: m.color,
                  }}>{mi + 1}</div>
                  <div>
                    <div style={{ fontSize: "9px", color: m.color, letterSpacing: "2px" }}>{m.phase}</div>
                    <div style={{ fontSize: "12px", color: "#e6edf3", fontWeight: "600" }}>{m.phaseTitle}</div>
                  </div>
                  <div style={{ marginLeft: "auto", fontSize: "9px", color: "#6e7681" }}>
                    {m.sessions.filter(s => s.status === "done").length}/{m.sessions.length} sesi
                  </div>
                </div>

                {/* Sessions */}
                {m.sessions.map((s, si) => (
                  <div key={si} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "10px 12px", marginBottom: "6px",
                    background: s.status === "done" ? "#0d1f2d" : "#0a0f14",
                    border: `1px solid ${s.status === "done" ? m.color + "44" : "#1e3a4a"}`,
                    borderRadius: "6px",
                    opacity: s.status === "soon" ? 0.5 : 1,
                  }}>
                    {/* Status icon */}
                    <div style={{
                      width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
                      background: s.status === "done" ? m.color + "22" : "#0a0f14",
                      border: `1.5px solid ${s.status === "done" ? m.color : "#1e3a4a"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "10px",
                    }}>
                      {s.status === "done" ? <span style={{ color: m.color }}>✓</span> : <span style={{ color: "#3d444d" }}>○</span>}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "9px", color: m.color, letterSpacing: "1px" }}>{s.code}</div>
                      <div style={{ fontSize: "12px", color: s.status === "done" ? "#e6edf3" : "#6e7681", fontWeight: "500", marginTop: "1px" }}>
                        {s.title}
                      </div>
                    </div>

                    {/* Action button */}
                    {s.status === "done" ? (
                      <a href={`/${s.file}`} target="_blank" rel="noopener noreferrer" style={{
                        padding: "5px 12px",
                        background: m.color + "22",
                        border: `1px solid ${m.color}66`,
                        borderRadius: "4px",
                        color: m.color,
                        fontSize: "10px",
                        textDecoration: "none",
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}>
                        BUKA →
                      </a>
                    ) : (
                      <span style={{
                        padding: "5px 10px",
                        background: "#0a0f14",
                        border: "1px solid #1e3a4a",
                        borderRadius: "4px",
                        color: "#3d444d",
                        fontSize: "9px",
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}>
                        SOON
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Note */}
            <div style={{ background: "#0d1f2d", border: "1px solid #1e3a4a", borderRadius: "6px", padding: "12px", marginTop: "8px" }}>
              <div style={{ fontSize: "10px", color: "#6e7681", lineHeight: "1.6" }}>
                ◈ Modul baru otomatis ditambahkan setiap sesi selesai.
                Setiap modul berisi teori, latihan interaktif, dan quiz.
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c10; }
        ::-webkit-scrollbar-thumb { background: #1e3a4a; border-radius: 2px; }
      `}</style>
    </div>
  );
}
