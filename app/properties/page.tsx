import { prisma } from "@/lib/prisma";
import { deleteProperty } from "./actions";
import AddPropertyModal from "./add-property-modal";
import StatusDot from "./status-dot";

export const dynamic = "force-dynamic";

const TYPE_LABELS: Record<string, string> = {
  UY: "Uy",
  OFIS: "Ofis",
  AVTO: "Avto",
};

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
    include: { currentClient: true },
  });

  const counts = {
    BOSH: properties.filter((p) => p.status === "BOSH").length,
    BAND: properties.filter((p) => p.status === "BAND").length,
    TAMIRLANMOQDA: properties.filter((p) => p.status === "TAMIRLANMOQDA").length,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-semibold tracking-tight text-[#0a0a0a]">
              Obyektlar
            </h1>
            <p className="mt-1 text-[14px] text-[#71717a]">
              Ijaraga beriladigan uy, ofis va avtomobillar
            </p>
          </div>
          <AddPropertyModal />
        </header>

        <div className="mb-8 flex items-center gap-8 border-b border-[#e5e5e5] pb-6 text-[14px]">
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-[#0a0a0a]">
              {properties.length}
            </span>
            <span className="text-[#71717a]">jami</span>
          </div>
          <div className="h-4 w-px bg-[#e5e5e5]" />
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-emerald-600">
              {counts.BOSH}
            </span>
            <span className="text-[#71717a]">bo&apos;sh</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-[#0a0a0a]">
              {counts.BAND}
            </span>
            <span className="text-[#71717a]">band</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[20px] font-semibold text-amber-600">
              {counts.TAMIRLANMOQDA}
            </span>
            <span className="text-[#71717a]">ta&apos;mirda</span>
          </div>
        </div>

        {properties.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#e5e5e5] py-20 text-center">
            <p className="text-[14px] text-[#71717a]">
              Hozircha obyekt yo&apos;q. Yuqoridagi tugma orqali birinchisini
              qo&apos;shing.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-[#e5e5e5]">
            <table className="w-full text-left text-[14px]">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-[#fafafa] text-[13px] text-[#71717a]">
                  <th className="px-5 py-3 font-medium">Nomi</th>
                  <th className="px-5 py-3 font-medium">Turi</th>
                  <th className="px-5 py-3 font-medium">Oylik narx</th>
                  <th className="px-5 py-3 font-medium">Holati</th>
                  <th className="px-5 py-3 font-medium">Mijoz</th>
                  <th className="px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {properties.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`group ${
                      i !== properties.length - 1
                        ? "border-b border-[#e5e5e5]"
                        : ""
                    } hover:bg-[#fafafa]`}
                  >
                    <td className="px-5 py-4 font-medium text-[#0a0a0a]">
                      {p.name}
                    </td>
                    <td className="px-5 py-4 text-[#52525b]">
                      {TYPE_LABELS[p.type]}
                    </td>
                    <td className="px-5 py-4 tabular-nums text-[#52525b]">
                      {Number(p.monthlyRate).toLocaleString("uz-UZ")} so&apos;m
                    </td>
                    <td className="px-5 py-4">
                      <StatusDot id={p.id} status={p.status} />
                    </td>
                    <td className="px-5 py-4 text-[#52525b]">
                      {p.currentClient ? p.currentClient.fullName : "—"}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <form
                        action={deleteProperty.bind(null, p.id)}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <button
                          type="submit"
                          className="text-[13px] text-[#71717a] hover:text-red-600"
                        >
                          O&apos;chirish
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
