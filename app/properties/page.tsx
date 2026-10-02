import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Obyekt turini belgilaymiz
interface Property {
  id: number;
  name: string;
  address: string;
  price: number;
  status: string;
}

export default async function PropertiesPage() {
  // Bazadan hamma obyektlarni olamiz
  const properties = await prisma.property.findMany() as Property[];

  async function createProperty(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const price = Number(formData.get("price"));
    const status = formData.get("status") as string;

    await prisma.property.create({
      data: { name, address, price, status },
    });

    revalidatePath("/properties");
  }

  return (
    <div className="p-8 max-w-6xl mx-auto dark:bg-slate-900 min-h-screen text-slate-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Obyektlar</h1>
          <p className="text-slate-400 mt-1">Ijara obyektlarini boshqarish paneli</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Yangi qo'shish formasi */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl h-fit">
          <h2 className="text-xl font-semibold mb-4">Yangi obyekt qo'shish</h2>
          <form action={createProperty} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Obyekt nomi</label>
              <input type="text" name="name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="Chilonzor 3-kvartira" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Manzil</label>
              <input type="text" name="address" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="Toshkent sh., Chilonzor tumani" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Oylik ijara narxi (\$)</label>
              <input type="number" name="price" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition" placeholder="400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Holati</label>
              <select name="status" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500 transition">
                <option value="Bo'sh">Bo'sh</option>
                <option value="Band">Band</option>
                <option value="Ta'mirlanmoqda">Ta'mirlanmoqda</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg transition duration-200 shadow-lg shadow-indigo-600/20">
              Saqlash
            </button>
          </form>
        </div>

        {/* Obyektlar ro'yxati jadvali */}
        <div className="md:col-span-2 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-700 text-slate-300 text-sm font-semibold">
                <th className="p-4">Nomi / Manzili</th>
                <th className="p-4">Narxi</th>
                <th className="p-4">Holati</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 text-sm">
              {properties.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-500">Hozircha hech qanday obyekt kiritilmagan</td>
                </tr>
              ) : (
                properties.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-700/30 transition">
                    <td className="p-4">
                      <div className="font-semibold text-white">{p.name}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{p.address}</div>
                    </td>
                    <td className="p-4 font-medium text-slate-200">\${p.price}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        p.status === "Bo'sh" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                        p.status === "Band" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
