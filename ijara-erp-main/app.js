const data = {
  apartments: [
    ["#A-001","Yunusobod, 12-uy","2","55 m²","3 500 000 so‘m","Ijarada","green"],
    ["#A-002","Chilonzor, 5-uy","1","40 m²","2 500 000 so‘m","Bo‘sh","blue"],
    ["#A-003","Mirzo Ulug‘bek, 8-uy","3","75 m²","4 000 000 so‘m","Ijarada","green"],
    ["#A-004","Yakkasaroy, 15-uy","2","60 m²","3 000 000 so‘m","Ta’mirda","amber"],
    ["#A-005","Sergeli, 3-uy","1","35 m²","2 300 000 so‘m","Bo‘sh","blue"],
    ["#A-006","Shayxontohur, 7-uy","2","50 m²","3 200 000 so‘m","Ijarada","green"],
    ["#A-007","Uchtepa, 10-uy","2","48 m²","2 800 000 so‘m","Ijarada","green"],
    ["#A-008","Yunusobod, 20-uy","3","65 m²","3 800 000 so‘m","Ijarada","green"]
  ],
  tenants: [
    ["Abdulloh Karimov","+998 90 123 45 67","#A-001","SH-001","2025-09-01","Faol","green"],
    ["Madina Toshpo‘latova","+998 93 234 56 78","#A-003","SH-002","2025-08-15","Faol","green"],
    ["Shuhrat Xolmirzayev","+998 99 345 67 89","#A-006","SH-003","2025-09-01","Faol","green"],
    ["Dilshod Nazarov","+998 97 456 78 90","#A-008","SH-004","2025-09-20","Faol","green"],
    ["Farida Qodirova","+998 95 567 89 01","#A-007","SH-005","2025-09-25","Faol","green"],
    ["Azizbek Ramatov","+998 90 678 90 12","#A-005","SH-006","2025-08-10","Faol","green"],
    ["Zarina Imomova","+998 93 789 01 23","#A-002","SH-007","2025-09-12","Kutilmoqda","amber"]
  ],
  owners: [
    ["Rustamov Aziz","+998 90 111 22 33","3","15 000 000 so‘m","Faol","green"],
    ["Karimova Gulnora","+998 91 222 33 44","2","9 500 000 so‘m","Faol","green"],
    ["Saidov Bekzod","+998 93 333 44 55","2","8 800 000 so‘m","Faol","green"],
    ["Toshboyev Alisher","+998 94 444 55 66","1","4 500 000 so‘m","Faol","green"],
    ["Qodirov Jahongir","+998 97 555 66 77","2","7 200 000 so‘m","Faol","green"]
  ],
  contracts: [
    ["SH-001","Abdulloh Karimov","#A-001","2025-09-01","2026-08-31","Faol","green"],
    ["SH-002","Madina Toshpo‘latova","#A-003","2025-08-15","2026-08-14","Faol","green"],
    ["SH-003","Shuhrat Xolmirzayev","#A-006","2025-09-01","2026-08-31","Faol","green"],
    ["SH-004","Dilshod Nazarov","#A-008","2025-09-20","2026-09-19","Faol","green"],
    ["SH-005","Farida Qodirova","#A-007","2025-09-25","2026-09-24","Faol","green"],
    ["SH-006","Azizbek Ramatov","#A-005","2025-08-10","2026-08-09","Tugash arafasida","amber"]
  ],
  payments: [
    ["Abdulloh Karimov","#A-001","4 500 000 so‘m","2025-10-08","Ijara","To‘langan","green"],
    ["Madina Toshpo‘latova","#A-003","4 000 000 so‘m","2025-10-07","Ijara","To‘langan","green"],
    ["Shuhrat Xolmirzayev","#A-006","3 200 000 so‘m","2025-10-05","Ijara","To‘langan","green"],
    ["Dilshod Nazarov","#A-008","3 800 000 so‘m","2025-10-04","Ijara","Kutilmoqda","amber"],
    ["Farida Qodirova","#A-007","2 800 000 so‘m","2025-10-03","Ijara","To‘langan","green"],
    ["Zarina Imomova","#A-002","2 500 000 so‘m","2025-10-01","Ijara","Kechikkan","red"]
  ],
  expenses: [
    ["2025-10-08","Kommunal to‘lov","#A-001","1 200 000 so‘m","Suv, elektr, gaz"],
    ["2025-10-06","Mayda ta’mirlash","#A-004","800 000 so‘m","Sanuzel ta’miri"],
    ["2025-10-05","Xodimlar maoshi","—","3 000 000 so‘m","Menejer"],
    ["2025-10-03","Tozalash","#A-003","450 000 so‘m","Umumiy hudud"],
    ["2025-10-02","Internet","#A-006","250 000 so‘m","Ofis uchun"],
    ["2025-10-01","Boshqa xarajat","#A-005","300 000 so‘m","Ta’minot"]
  ]
};
const pages = {
 dashboard:{title:"Dashboard",desc:"Biznesingizning bugungi holati va asosiy ko‘rsatkichlari.",action:"Yangi yozuv"},
 apartments:{title:"Kvartiralar",desc:"Barcha kvartiralar, bandlik holati va ijara narxlarini boshqaring.",action:"Yangi kvartira"},
 tenants:{title:"Ijarachilar",desc:"Ijarachilar ro‘yxati, aloqa ma’lumotlari va shartnomalar.",action:"Yangi ijarachi"},
 owners:{title:"Kvartira egalari",desc:"Mulk egalari va ularga tegishli kvartiralar hisobini yuriting.",action:"Yangi ega"},
 contracts:{title:"Ijara shartnomalari",desc:"Shartnoma muddatlari, holati va ijarachilarni kuzatib boring.",action:"Yangi shartnoma"},
 payments:{title:"To‘lovlar",desc:"Ijara tushumlari, to‘lov holatlari va kechikishlarni nazorat qiling.",action:"Yangi to‘lov"},
 expenses:{title:"Xarajatlar",desc:"Biznes xarajatlarini qayd eting va xarajatlar tarkibini tahlil qiling.",action:"Yangi xarajat"},
 reports:{title:"Hisobotlar",desc:"Daromad, xarajat va kvartiralar bo‘yicha moliyaviy tahlil.",action:"Hisobotni yuklash"},
 settings:{title:"Sozlamalar",desc:"Tizim sozlamalari va boshqaruv parametrlarini ko‘rib chiqing.",action:"Saqlash"}
};
let activePage = "dashboard";
function money(value){return value}
function metric(label,value,foot,icon,theme){return `<article class="metric"><div class="metric-top"><span>${label}</span><span class="metric-icon ${theme}">${icon}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div></article>`}
function panelHead(title,subtitle="",right=""){return `<div class="panel-head"><div><h2>${title}</h2>${subtitle?`<p>${subtitle}</p>`:""}</div>${right}</div>`}
function status(text,cls){return `<span class="pill ${cls}">${text}</span>`}
function toolbar(placeholder="Qidirish..."){return `<div class="table-toolbar"><label class="search"><input id="tableSearch" type="search" placeholder="${placeholder}" aria-label="Jadvaldan qidirish"></label><select class="filter-select" id="statusFilter"><option value="">Barcha holatlar</option><option>Faol</option><option>Bo‘sh</option><option>Ijarada</option><option>To‘langan</option><option>Kutilmoqda</option><option>Kechikkan</option></select><button class="button button-primary" onclick="newRecord()">＋ Yangi yozuv</button></div>`}
function table(headers,rows){return `<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}<th>Amallar</th></tr></thead><tbody>${rows.map(row=>`<tr>${row.map((cell,i)=>`<td>${cell}</td>`).join("")}<td><div class="row-actions"><button class="small-action" title="Ko‘rish" onclick="toast('Ko‘rish oynasi demo rejimida')">◉</button><button class="small-action" title="Tahrirlash" onclick="toast('Tahrirlash demo rejimida')">✎</button><button class="small-action delete" title="O‘chirish" onclick="toast('Demo: ma’lumot o‘chirilmagan')">×</button></div></td></tr>`).join("")}</tbody></table></div><div class="table-footer"><span>Jami ${rows.length} ta yozuv ko‘rsatilmoqda</span><div class="pagination"><button>‹</button><button class="current">1</button><button>2</button><button>3</button><button>›</button></div></div>`}
function dashboard(){
 const bars=[48,63,54,76,67,84,73,95,88,105,98,120];
 return `<div class="metrics">
 ${metric("Jami kvartiralar","12","10 ta ijarada, 2 ta bo‘sh","⌂","blue-bg")}
 ${metric("Ijarachilar","10",'<span class="positive">↑ 2 ta</span> faol ijarachi',"♙","green-bg")}
 ${metric("Kvartira egalari","5","Faol mulk egalari","♧","orange-bg")}
 ${metric("Oylik daromad","12 500 000 so‘m",'<span class="positive">↑ 12%</span> o‘tgan oyga nisbatan',"↗","purple-bg")}
 </div><div class="dashboard-grid"><section class="panel">${panelHead("Daromad va xarajatlar","Oxirgi 6 oy bo‘yicha","<div class='legend'><span><i class='dot'></i>Daromad</span><span><i class='dot orange'></i>Xarajat</span></div>")}<div class="bar-chart">${["May","Iyun","Iyul","Avg","Sen","Okt"].map((m,i)=>`<div class="bar-group"><div class="bar" style="height:${bars[i+2]}px"></div><div class="bar expense" style="height:${bars[i+2]*.56}px"></div><span class="bar-label">${m}</span></div>`).join("")}</div></section><section class="panel">${panelHead("Kvartiralar holati","Joriy bandlik statistikasi")}<div class="status-summary"><div class="donut"><div class="donut-inner"><strong>12</strong><small>Jami kvartira</small></div></div><div class="status-list"><div class="status-row"><span class="status-label"><i class="status-dot"></i>Ijarada</span><strong>8</strong></div><div class="status-row"><span class="status-label"><i class="status-dot green"></i>Bo‘sh</span><strong>2</strong></div><div class="status-row"><span class="status-label"><i class="status-dot amber"></i>Ta’mirda</span><strong>2</strong></div></div></div></section></div><section class="panel">${panelHead("So‘nggi to‘lovlar","Oxirgi kiritilgan ijara tushumlari",'<button class="text-link" onclick="navigate(\\'payments\\')">Barchasini ko‘rish →</button>')}${table(["Ijarachi","Kvartira","Summa","Sana","Holat"],data.payments.slice(0,4).map(r=>[`<strong>${r[0]}</strong>`,r[1],r[2],r[3],status(r[5],r[6])]))}</section>`;
}
function listPage(key){
 const configs={
 apartments:{headers:["№","Kvartira raqami","Manzil","Xona soni","Maydon","Oylik ijara","Holat"],rows:data.apartments.map(r=>[r[0],`<strong>${r[1]}</strong>`,r[1],r[2],r[3],r[4],status(r[5],r[6])])},
 tenants:{headers:["F.I.O.","Telefon","Kvartira","Shartnoma №","Boshlangan sana","Holat"],rows:data.tenants.map(r=>[`<strong>${r[0]}</strong>`,r[1],r[2],r[3],r[4],status(r[5],r[6])])},
 owners:{headers:["F.I.O.","Telefon","Kvartiralar soni","Umumiy daromad","Holat"],rows:data.owners.map(r=>[`<strong>${r[0]}</strong>`,r[1],r[2],r[3],status(r[4],r[5])])},
 contracts:{headers:["Shartnoma №","Ijarachi","Kvartira","Boshlanish sanasi","Tugash sanasi","Holat"],rows:data.contracts.map(r=>[`<strong>${r[0]}</strong>`,r[1],r[2],r[3],r[4],status(r[5],r[6])])},
 payments:{headers:["Ijarachi","Kvartira","Summa","Sana","To‘lov turi","Holat"],rows:data.payments.map(r=>[`<strong>${r[0]}</strong>`,r[1],`<strong>${r[2]}</strong>`,r[3],r[4],status(r[5],r[6])])},
 expenses:{headers:["Sana","Xarajat turi","Kvartira","Summa","Izoh"],rows:data.expenses.map(r=>[r[0],`<strong>${r[1]}</strong>`,r[2],`<strong>${r[3]}</strong>`,r[4]])}
 };
 const c=configs[key];
 return `<section class="panel">${toolbar()}${table(c.headers,c.rows)}</section>`;
}
function reports(){
 return `<div class="report-tabs"><button class="active">Umumiy hisobot</button><button>Daromad va xarajatlar</button><button>Kvartiralar bo‘yicha</button><button>Ijarachilar bo‘yicha</button></div><div class="metrics">${metric("Jami daromad","12 500 000 so‘m",'<span class="positive">↑ 12%</span> o‘tgan davrga nisbatan',"↗","green-bg")}${metric("Jami xarajat","4 800 000 so‘m",'<span class="negative">↑ 5%</span> o‘tgan davrga nisbatan',"↘","orange-bg")}${metric("Sof foyda","7 700 000 so‘m",'<span class="positive">↑ 16%</span> o‘tgan davrga nisbatan',"◈","blue-bg")}${metric("To‘lovlar","8 ta", "To‘langan to‘lovlar","✓","purple-bg")}</div><div class="dashboard-grid"><section class="panel">${panelHead("Daromad va xarajatlar","2025-yil, oylik kesimida")}<div class="report-chart">${[54,68,61,75,69,82,76,91,84,100,93,116].map((h,i)=>`<div class="report-line"><span style="height:${h}px"></span><span class="alt" style="height:${h*.45}px"></span><label>${["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"][i]}</label></div>`).join("")}</div></section><section class="panel">${panelHead("To‘lovlar holati","Joriy davr")}<div class="status-summary"><div class="donut"><div class="donut-inner"><strong>8</strong><small>To‘lov</small></div></div><div class="status-list"><div class="status-row"><span class="status-label"><i class="status-dot green"></i>To‘langan</span><strong>8</strong></div><div class="status-row"><span class="status-label"><i class="status-dot amber"></i>Kutilmoqda</span><strong>2</strong></div><div class="status-row"><span class="status-label"><i class="status-dot" style="background:#e15b65"></i>Kechikkan</span><strong>1</strong></div></div></div></section></div>`;
}
function settings(){return `<section class="panel">${panelHead("Tizim sozlamalari","Demo interfeys uchun asosiy parametrlar")}<div class="metrics">${metric("Tizim tili","O‘zbekcha","Interfeys tili","文","blue-bg")}${metric("Valyuta","UZS","So‘m","₮","green-bg")}${metric("Foydalanuvchilar","1","Administratorlar","♙","purple-bg")}${metric("Holat","Faol","Demo rejim","✓","orange-bg")}</div><p class="empty-note">Keyingi bosqichda foydalanuvchi rollari, valyuta, bildirishnomalar va ma’lumotlar zaxira nusxasi sozlamalarini ulash mumkin.</p></section>`}
function render(){
 const p=pages[activePage];document.getElementById("pageTitle").textContent=p.title;document.getElementById("pageCrumb").textContent=p.title;document.getElementById("pageDescription").textContent=p.desc;document.getElementById("primaryAction").textContent="＋ "+p.action;
 document.querySelectorAll(".nav-item[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===activePage));
 document.getElementById("pageBody").innerHTML=activePage==="dashboard"?dashboard():activePage==="reports"?reports():activePage==="settings"?settings():listPage(activePage);
 const search=document.getElementById("tableSearch");if(search)search.addEventListener("input",()=>{const q=search.value.toLowerCase();document.querySelectorAll("#pageBody tbody tr").forEach(tr=>tr.style.display=tr.innerText.toLowerCase().includes(q)?"":"none")});
 const filter=document.getElementById("statusFilter");if(filter)filter.addEventListener("change",()=>{const q=filter.value.toLowerCase();document.querySelectorAll("#pageBody tbody tr").forEach(tr=>tr.style.display=(!q||tr.innerText.toLowerCase().includes(q))?"":"none")});
}
function navigate(key){activePage=key;render();window.scrollTo({top:0,behavior:"smooth"})}
function toast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
function newRecord(){toast("Demo rejim: yangi yozuv formasi keyingi bosqichda ulanadi")}
document.getElementById("navigation").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b)navigate(b.dataset.page)});
document.getElementById("primaryAction").addEventListener("click",newRecord);
document.getElementById("exportBtn").addEventListener("click",()=>{const rows=[["KvartiraERP",pages[activePage].title],...Array.from(document.querySelectorAll("#pageBody table tr")).map(tr=>Array.from(tr.children).map(td=>td.innerText))];const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8;"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`kvartiraerp-${activePage}.csv`;a.click();URL.revokeObjectURL(a.href);toast("CSV eksport tayyorlandi")});
render();
