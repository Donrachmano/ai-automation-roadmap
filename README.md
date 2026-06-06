# 🤖 AI Automation Expert — Roadmap & Kurikulum

> **Non-IT Background → AI Automation Expert → Remote Income ($2K+/bulan)**

Aplikasi interaktif yang menampilkan roadmap lengkap perjalanan belajar menjadi AI Automation Expert, dari fondasi hingga monetisasi remote.

---

## 🗺️ Isi Roadmap

| Fase | Topik | Durasi |
|------|-------|--------|
| F-01 | Fondasi Data & API (JSON, REST API, Webhook) | Bulan 1–2 |
| F-02 | JavaScript untuk Automation | Bulan 2–4 |
| F-03 | n8n Mastery | Bulan 3–6 |
| F-04 | AI Integration & Specialization | Bulan 6–10 |
| F-05 | Market Entry & Remote Income | Bulan 10–18 |

---

## 🚀 Cara Jalankan di Lokal

Pastikan sudah install [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
# 1. Clone repository ini
git clone https://github.com/USERNAME/ai-automation-roadmap.git

# 2. Masuk ke folder project
cd ai-automation-roadmap

# 3. Install dependencies
npm install

# 4. Jalankan di browser
npm run dev
```

Buka browser → `http://localhost:5173`

---

## 🌐 Deploy ke Vercel (Gratis)

### Cara 1 — Via Vercel Website (Termudah)
1. Push project ini ke GitHub
2. Buka [vercel.com](https://vercel.com) → Login dengan GitHub
3. Klik **"New Project"** → pilih repository ini
4. Klik **"Deploy"** — selesai!

Vercel otomatis deteksi Vite + React. Tidak perlu konfigurasi tambahan.

### Cara 2 — Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool (cepat, modern)
- **Pure CSS-in-JS** — Styling tanpa library tambahan

---

## 📁 Struktur Project

```
ai-automation-roadmap/
├── index.html          ← Entry HTML
├── vite.config.js      ← Vite configuration
├── package.json        ← Dependencies
├── .gitignore
├── README.md
└── src/
    ├── main.jsx        ← React entry point
    ├── App.jsx         ← Root component
    └── Roadmap.jsx     ← Main roadmap component
```

---

## ✏️ Cara Update Kurikulum

Semua data kurikulum ada di **`src/Roadmap.jsx`**, di bagian array `phases`.

Untuk menambah atau mengubah materi, edit bagian `topics` di fase yang sesuai:

```js
{
  week: "Minggu 1–2",
  title: "Nama Topik Baru",
  items: [
    "Materi 1",
    "Materi 2",
  ],
  project: "Deskripsi project praktik",
}
```

---

## 📄 Lisensi

MIT — bebas digunakan dan dimodifikasi.

---

*Dibuat sebagai bagian dari AI Automation Bootcamp — Claude as Mentor*
