"use client";

import { updateStatus } from "./actions";

const STATUS_LABELS: Record<string, string> = {
  BOSH: "Bo'sh",
  BAND: "Band",
  TAMIRLANMOQDA: "Ta'mirlanmoqda",
};

const STATUS_COLORS: Record<string, string> = {
  BOSH: "#10b981",
  BAND: "#0a0a0a",
  TAMIRLANMOQDA: "#f59e0b",
};

export default function StatusDot({
  id,
  status,
}: {
  id: number;
  status: string;
}) {
  return (
    <form action={updateStatus.bind(null, id)}>
      <select
        name="status"
        defaultValue={status}
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
        className="relative cursor-pointer appearance-none bg-transparent py-1 pl-4 pr-2 text-[13px] text-[#0a0a0a] focus:outline-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${STATUS_COLORS[status]} 3px, transparent 3px)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 center",
        }}
      >
        {Object.entries(STATUS_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </form>
  );
}
