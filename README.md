# KvartiraERP — UI prototipi

O‘zbek tilidagi kvartira ijarasini boshqarish ERP tizimi uchun frontend prototip.

## Sahifalar
- Dashboard
- Kvartiralar
- Ijarachilar
- Kvartira egalari
- Ijara shartnomalari
- To‘lovlar
- Xarajatlar
- Hisobotlar
- Sozlamalar

## Ishga tushirish
1. Repozitoriyani yuklab oling yoki ZIP faylni oching.
2. `index.html` faylini brauzerda oching.
3. Sahifalar orasida chap menyu orqali harakatlaning.

Ishlatish uchun Node.js yoki build jarayoni talab qilinmaydi. Google Fonts internet mavjud bo‘lganda ishlatiladi; shrift yuklanmasa, tizim zaxira shriftlardan foydalanadi.

## Muhim eslatma
Bu hozircha **frontend demo/prototip**: jadval qidiruvi, status filtri, sahifalar navigatsiyasi va CSV eksport ishlaydi. Ma’lumotlar JavaScript ichidagi namuna ma’lumotlaridir. Hali backend, autentifikatsiya, ma’lumotlar bazasi, haqiqiy CRUD amallari, rollar va xavfsizlik qatlami ulanmagan. Real biznesda ishlatishdan oldin backend va testlar bilan to‘ldirish kerak.

## GitHub'ga yuklash
```bash
git init
git add .
git commit -m "Add KvartiraERP UI prototype"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```
`USERNAME/REPOSITORY` qismini o‘zingizning GitHub manzilingizga almashtiring.

## Fayllar
- `index.html` — sahifa tuzilmasi
- `styles.css` — dizayn va responsive ko‘rinish
- `app.js` — namuna ma’lumotlar, navigatsiya, jadvallar va demo amallar
- `assets/ui-preview.png` — 8 sahifalik dizayn preview
