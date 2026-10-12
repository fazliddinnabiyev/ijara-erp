# KvartiraERP — shaxsiy ijara boshqaruvi

O‘zbek tilidagi Next.js ilovasi. Bir dona o‘z kvartirasini ijaraga beruvchi mulk egasi uchun moslangan.

## Asosiy imkoniyatlar
- Dashboard: kvartira, faol shartnoma, tushum, xarajat va sof pul oqimi ko‘rsatkichlari.
- Bitta mulk egasi ssenariysi: “Kvartira egalari” bo‘limi yo‘q.
- Ijarachilarni ro‘yxatga olish va telefon raqamini saqlash.
- Shartnoma va to‘lov shakllarida ijarachi ismi bo‘yicha tavsiya; faqat ro‘yxatdagi ijarachini tanlaganda saqlash.
- Sana maydonlari bugungi sana bilan to‘ldiriladi, ammo o‘zgartirish mumkin.
- Shartnomada boshlanish/tugash sanasi, ijara summasi, depozit va to‘lov kuni.
- To‘lovlar, xarajatlar, qidiruv va JSON eksport.
- Dashboard ichida moliyaviy umumlashtirish; alohida “Hisobotlar” menyusi yo‘q.

## Muhim ma’lumot saqlash eslatmasi
Hozirgi asosiy sahifadagi ma’lumotlar brauzerning `localStorage` xotirasida saqlanadi. Ular shu brauzer/profilga bog‘liq va boshqa qurilmalarga avtomatik sinxronlanmaydi. Real ishlab chiqarish uchun autentifikatsiya, server API va PostgreSQL bazasi bilan ulash zarur. Namuna ijarachilarni o‘zingizning haqiqiy ma’lumotlaringizga almashtiring.

## GitHub va Vercel
1. ZIP arxivini oching.
2. Ichidagi `ijara-erp-main` papkasining ichidagi barcha fayl va papkalarni repository ildiziga yuklang (papkaning o‘zini ichma-ich yuklamang).
3. Repository ildizida `package.json` va `app/page.tsx` turganini tekshiring.
4. GitHub’da **Commit changes** bosing.
5. Vercel’da yangi deployment natijasini tekshiring.

## Ishga tushirish
Node.js 20.9+ tavsiya etiladi.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Build natijasini tekshirmasdan ishlab chiqarish muhiti uchun kafolat berib bo‘lmaydi.
