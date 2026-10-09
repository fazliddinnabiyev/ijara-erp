"use client";

import { useRef } from "react";
import { createProperty } from "./actions";

export default function AddPropertyModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-lg bg-[#0a0a0a] px-4 py-2 text-[14px] font-medium text-white transition hover:bg-[#262626]"
      >
        + Yangi obyekt
      </button>

      <dialog
        ref={dialogRef}
        className="w-full max-w-md rounded-xl border border-[#e5e5e5] p-0 shadow-xl backdrop:bg-transparent"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold text-[#0a0a0a]">
              Yangi obyekt qo&apos;shish
            </h2>
            <button
              onClick={() => dialogRef.current?.close()}
              className="text-[#a1a1aa] transition hover:text-[#0a0a0a]"
              aria-label="Yopish"
              type="button"
            >
              ✕
            </button>
          </div>

          <form
            action={async (formData) => {
              await createProperty(formData);
              dialogRef.current?.close();
            }}
            className="space-y-4"
          >
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-[#3f3f46]">
                Nomi
              </label>
              <input
                name="name"
                required
                placeholder="2-xonali kvartira, Chilonzor"
                className="w-full rounded-lg border border-[#e5e5e5] px-3 py-2 text-[14px] outline-none focus:border-[#5b5bd6] focus:ring-2 focus:ring-[#5b5bd6]/15"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#3f3f46]">
                  Turi
                </label>
                <select
                  name="type"
                  className="w-full rounded-lg border border-[#e5e5e5] px-3 py-2 text-[14px] outline-none focus:border-[#5b5bd6] focus:ring-2 focus:ring-[#5b5bd6]/15"
                >
                  <option value="UY">Uy</option>
                  <option value="OFIS">Ofis</option>
                  <option value="AVTO">Avto</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-[#3f3f46]">
                  Oylik narx
                </label>
                <input
                  name="monthlyRate"
                  type="number"
                  min="0"
                  required
                  placeholder="3000000"
                  className="w-full rounded-lg border border-[#e5e5e5] px-3 py-2 text-[14px] outline-none focus:border-[#5b5bd6] focus:ring-2 focus:ring-[#5b5bd6]/15"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="rounded-lg px-4 py-2 text-[14px] font-medium text-[#71717a] transition hover:bg-[#f4f4f5]"
              >
                Bekor qilish
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#5b5bd6] px-4 py-2 text-[14px] font-medium text-white transition hover:bg-[#4c4cc4]"
              >
                Qo&apos;shish
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
