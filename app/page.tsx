"use client";

import { useState } from "react";

const menu = [
["Dashboard", "▦"],
["Kvartiralar", "⌂"],
["Ijarachilar", "♙"],
["Kvartira egalari", "♧"],
["Ijara shartnomalari", "▤"],
["To‘lovlar", "↔"],
["Xarajatlar", "▣"],
["Hisobotlar", "▥"],
];

const apartments = [
["A-001", "Yunusobod, 12-uy", "2", "55 m²", "3 500 000", "Ijarada"],
["A-002", "Chilonzor, 5-uy", "1", "40 m²", "2 500 000", "Bo‘sh"],
["A-003", "Mirzo Ulug‘bek, 8-uy", "3", "75 m²", "4 000 000", "Ijarada"],
["A-004", "Yakkasaroy, 15-uy", "2", "60 m²", "3 000 000", "Ta’mirda"],
["A-005", "Sergeli, 3-uy", "1", "35 m²", "2 300 000", "Bo‘sh"],
];

const tenants = [
["Abdulloh Karimov", "+998 90 123 45 67", "A-001", "SH-001", "Faol"],
["Madina Toshpo‘latova", "+998 93 234 56 78", "A-003", "SH-002", "Faol"],
["Shuhrat Xolmirzayev", "+998 99 345 67 89", "A-006", "SH-003", "Faol"],
["Dilshod Nazarov", "+998 97 456 78 90", "A-008", "SH-004", "Faol"],
];

const owners = [
["Rustamov Aziz", "+998 90 111 22 33", "3", "15 000 000", "Faol"],
["Karimova Gulnora", "+998 91 222 33 44", "2", "9 500 000", "Faol"],
["Saidov Bekzod", "+998 93 333 44 55", "2", "8 800 000", "Faol"],
];

const contracts = [
["SH-001", "Abdulloh Karimov", "A-001", "01.09.2025", "31.08.2026", "Faol"],
["SH-002", "Madina Toshpo‘latova", "A-003", "15.08.2025", "14.08.2026", "Faol"],
["SH-003", "Shuhrat Xolmirzayev", "A-006", "01.09.2025", "31.08.2026", "Faol"],
];

const payments = [
["Abdulloh Karimov", "A-001", "3 500 000", "08.10.2026", "To‘langan"],
["Madina Toshpo‘latova", "A-003", "4 000 000", "07.10.2026", "To‘langan"],
["Shuhrat Xolmirzayev", "A-006", "3 200 000", "05.10.2026", "Kutilmoqda"],
["Dilshod Nazarov", "A-008", "3 800 000", "04.10.2026", "Kechikkan"],
];

const expenses = [
["08.10.2026", "Kommunal to‘lov", "A-001", "1 200 000"],
["06.10.2026", "Mayda ta’mirlash", "A-004", "800 000"],
["05.10.2026", "Xodimlar maoshi", "—", "3 000 000"],
["03.10.2026", "Tozalash", "A-003", "450 000"],
];

const configs: Record<string, { headers: string[]; rows: string[][] }> = {
Kvartiralar: {
headers: ["№", "Manzil", "Xona", "Maydon", "Ijara / oy", "Holat"],
rows: apartments,
},
Ijarachilar: {
headers: ["F.I.O.", "Telefon", "Kvartira", "Shartnoma", "Holat"],
rows: tenants,
},
"Kvartira egalari": {
headers: ["F.I.O.", "Telefon", "Kvartiralar", "Daromad", "Holat"],
rows: owners,
},
"Ijara shartnomalari": {
headers: ["Shartnoma", "Ijarachi", "Kvartira", "Boshlanish", "Tugash", "Holat"],
rows: contracts,
},
To‘lovlar: {
headers: ["Ijarachi", "Kvartira", "Summa (so‘m)", "Sana", "Holat"],
rows: payments,
},
Xarajatlar: {
headers: ["Sana", "Xarajat turi", "Kvartira", "Summa (so‘m)"],
rows: expenses,
},
};

export default function Home() {
const [page, setPage] = useState("Dashboard");
const [query, setQuery] = useState("");
const [notice, setNotice] = useState("");
const [showForm, setShowForm] = useState(false);
const [newName, setNewName] = useState("");
const [newAmount, setNewAmount] = useState("");
const [extraRows, setExtraRows] = useState<Record<string, string[][]>>({});

const config = configs[page];
const rows = config
? [...config.rows, ...(extraRows[page] || [])].filter((row) =>
row.join(" ").toLowerCase().includes(query.toLowerCase())
)
: [];

function createRecord() {
if (!newName.trim()) {
setNotice("Iltimos, nom yoki F.I.O. kiriting.");
return;
}

```
let record: string[];

if (page === "Kvartiralar") {
  record = [
    `A-${String(apartments.length + (extraRows[page]?.length || 1)).padStart(3, "0")}`,
    newName,
    "2",
    "50 m²",
    newAmount || "0",
    "Bo‘sh",
  ];
} else if (page === "Ijarachilar") {
  record = [newName, newAmount || "—", "—", "—", "Faol"];
} else if (page === "Kvartira egalari") {
  record = [newName, newAmount || "—", "0", "0", "Faol"];
} else if (page === "To‘lovlar") {
  record = [newName, "—", newAmount || "0", new Date().toLocaleDateString("uz-UZ"), "Kutilmoqda"];
} else if (page === "Xarajatlar") {
  record = [new Date().toLocaleDateString("uz-UZ"), newName, "—", newAmount || "0"];
} else {
  record = [newName, newAmount || "—", "—", "—", "Faol"];
}

setExtraRows((prev) => ({
  ...prev,
  [page]: [...(prev[page] || []), record],
}));
setShowForm(false);
setNewName("");
setNewAmount("");
setNotice("Yozuv joriy demo sessiyasiga qo‘shildi.");
```

}

function exportCSV() {
const data = [config.headers, ...rows];
const csv = "\uFEFF" + data
.map((row) => row.map((v) => `"${v.replace(/"/g, '""')}"`).join(";"))
.join("\n");
const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
const a = document.createElement("a");
a.href = url;
a.download = `${page.toLowerCase().replaceAll(" ", "-")}.csv`;
a.click();
URL.revokeObjectURL(url);
}

const cardData = [
["Jami kvartiralar", "12", "2 ta bo‘sh", "⌂", "blue"],
["Ijarachilar", "10", "Faol mijozlar", "♙", "green"],
["Kvartira egalari", "5", "Mulk egalari", "♧", "orange"],
["Oylik daromad", "12,5 mln", "So‘m hisobida", "↗", "purple"],
];

return ( <div className="min-h-screen bg-slate-100 text-slate-800 md:flex"> <aside className="flex w-full flex-col bg-[#111f38] p-4 text-white md:fixed md:inset-y-0 md:w-60"> <div className="mb-7 flex items-center gap-3 px-2 py-2 text-lg font-extrabold"> <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600">K</span>
KvartiraERP </div> <p className="mb-3 px-3 text-xs tracking-widest text-slate-400">ASOSIY MENYU</p> <nav className="grid grid-cols-2 gap-1 md:block">
{menu.map(([name, icon]) => (
<button
key={name}
onClick={() => {
setPage(name);
setQuery("");
setNotice("");
}}
className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                page === name ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-white/10"
              }`}
> <span className="text-lg">{icon}</span>{name} </button>
))} </nav> <div className="mt-auto hidden border-t border-white/10 pt-5 text-xs text-slate-400 md:block">
KvartiraERP · v1.0 </div> </aside>

```
  <main className="min-w-0 flex-1 md:ml-60">
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-9">
      <div className="text-sm text-slate-500">Boshqaruv / <strong className="text-slate-800">{page}</strong></div>
      <div className="flex items-center gap-3">
        <span className="hidden text-right sm:block"><strong className="block text-xs">Administrator</strong><small className="text-slate-400">Tizim boshqaruvchisi</small></span>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 font-bold text-blue-700">FN</div>
      </div>
    </header>

    <section className="p-4 md:p-8">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[.2em] text-blue-600">IJARA BOSHQARUVI</p>
          <h1 className="text-3xl font-extrabold tracking-tight">{page}</h1>
          <p className="mt-2 text-sm text-slate-500">Kvartira ijarasi biznesingizni yagona tizimda boshqaring.</p>
        </div>
        <div className="flex gap-2">
          {config && <button onClick={exportCSV} className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold hover:bg-slate-50">↓ Eksport</button>}
          {page !== "Dashboard" && page !== "Hisobotlar" && (
            <button onClick={() => { setShowForm(!showForm); setNotice(""); }} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">＋ Yangi yozuv</button>
          )}
        </div>
      </div>

      {notice && <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">{notice}</div>}

      {showForm && (
        <div className="mb-5 rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold">Yangi yozuv: {page}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder={page === "Kvartiralar" ? "Kvartira manzili" : "F.I.O. yoki nom"} className="rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500" />
            <input value={newAmount} onChange={(e) => setNewAmount(e.target.value)} placeholder={page === "Ijarachilar" || page === "Kvartira egalari" ? "Telefon raqami" : "Summa (so‘m), ixtiyoriy"} className="rounded-lg border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500" />
          </div>
          <div className="mt-4 flex gap-2">
            <button onClick={createRecord} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">Saqlash</button>
            <button onClick={() => setShowForm(false)} className="rounded-lg border px-4 py-2.5 text-sm">Bekor qilish</button>
          </div>
        </div>
      )}

      {page === "Dashboard" && (
        <>
          <div className="mb-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map(([title, value, foot, icon, color]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  {title}
                  <span className={`grid h-10 w-10 place-items-center rounded-xl text-xl ${
                    color === "blue" ? "bg-blue-50 text-blue-600" :
                    color === "green" ? "bg-emerald-50 text-emerald-600" :
                    color === "orange" ? "bg-orange-50 text-orange-600" : "bg-violet-50 text-violet-600"
                  }`}>{icon}</span>
                </div>
                <div className="my-3 text-2xl font-extrabold">{value}</div>
                <div className="text-xs text-slate-400">{foot}</div>
              </div>
            ))}
          </div>
          <div className="grid gap-5 xl:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold">Daromad va xarajatlar</h2>
              <p className="mt-1 text-xs text-slate-400">Oylik ko‘rsatkichlar · namuna grafik</p>
              <div className="mt-8 flex h-52 items-end justify-around gap-3 border-b border-slate-100 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_49px,#eef2f7_50px)] px-2">
                {[55, 76, 65, 100, 80, 125, 110, 145].map((height, i) => (
                  <div key={i} className="flex h-full flex-1 items-end justify-center gap-1">
                    <div style={{ height: `${height}px` }} className="w-3 rounded-t bg-blue-500 sm:w-5"></div>
                    <div style={{ height: `${height * 0.55}px` }} className="w-3 rounded-t bg-orange-400 sm:w-5"></div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-5 text-xs text-slate-500"><span>🔵 Daromad</span><span>🟠 Xarajat</span></div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold">Kvartiralar holati</h2>
              <p className="mt-1 text-xs text-slate-400">Joriy bandlik statistikasi</p>
              <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                <div className="grid h-40 w-40 place-items-center rounded-full" style={{ background: "conic-gradient(#2563eb 0 67%,#10b981 67% 84%,#f59e0b 84% 100%)" }}>
                  <div className="grid h-28 w-28 place-content-center rounded-full bg-white text-center"><b className="text-3xl">12</b><span className="text-xs text-slate-400">Jami kvartira</span></div>
                </div>
                <div className="space-y-4 text-sm">
                  <p>🔵 Ijarada <b className="ml-5">8</b></p>
                  <p>🟢 Bo‘sh <b className="ml-8">2</b></p>
                  <p>🟠 Ta’mirda <b className="ml-3">2</b></p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-4 font-bold">Tezkor bo‘limlar</h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {menu.slice(1).map(([name, icon]) => (
                <button key={name} onClick={() => setPage(name)} className="rounded-lg border border-slate-200 p-4 text-left hover:border-blue-300 hover:bg-blue-50">
                  <span className="mr-2 text-xl">{icon}</span><span className="font-semibold">{name}</span><span className="ml-2 text-blue-600">→</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {config && (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-4">
            <h2 className="font-bold">Barcha yozuvlar</h2>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="⌕ Qidirish..." className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-400 sm:w-64" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500">
                <tr>{config.headers.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-4 text-slate-600">
                        {j === row.length - 1 && ["Ijarada", "Bo‘sh", "Ta’mirda", "Faol", "To‘langan", "Kutilmoqda", "Kechikkan"].includes(cell) ? (
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            cell === "Bo‘sh" || cell === "To‘langan" || cell === "Faol" ? "bg-emerald-50 text-emerald-700" :
                            cell === "Kechikkan" ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-700"
                          }`}>{cell}</span>
                        ) : cell}
                      </td>
                    ))}
                  </tr>
                ))}
                {rows.length === 0 && <tr><td colSpan={config.headers.length} className="p-8 text-center text-slate-400">Ma’lumot topilmadi.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="border-t border-slate-100 px-4 py-3 text-xs text-slate-400">Jami {rows.length} ta yozuv</div>
        </div>
      )}

      {page === "Hisobotlar" && (
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Jami daromad</p><h2 className="my-3 text-3xl font-extrabold">12 500 000 so‘m</h2><span className="text-xs text-emerald-600">Ijara tushumlari</span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Jami xarajatlar</p><h2 className="my-3 text-3xl font-extrabold">4 800 000 so‘m</h2><span className="text-xs text-orange-600">Operatsion xarajatlar</span>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-sm text-slate-500">Hisoblangan sof foyda</p><h2 className="my-3 text-3xl font-extrabold text-emerald-600">7 700 000 so‘m</h2><p className="text-xs text-slate-400">Bu raqamlar demo uchun berilgan namuna qiymatlaridir.</p>
          </div>
        </div>
      )}

      <footer className="mt-8 flex flex-wrap justify-between gap-2 text-xs text-slate-400">
        <span>© 2026 KvartiraERP</span><span>Ijara biznesingiz — yagona tizimda</span>
      </footer>
    </section>
  </main>
</div>
```

);
}
