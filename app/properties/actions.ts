import { prisma } from "@/lib/prisma";

export async function createProperty(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as PropertyType;
  const monthlyRate = formData.get("monthlyRate") as string;

  await prisma.property.create({
    data: {
      name,
      type,
      monthlyRate: Number(monthlyRate),
    },
  });

  revalidatePath("/properties");
}

export async function updateStatus(id: number, formData: FormData) {
  const status = formData.get("status") as PropertyStatus;

  await prisma.property.update({
    where: { id },
    data: { status },
  });

  revalidatePath("/properties");
}

export async function deleteProperty(id: number) {
  await prisma.property.delete({ where: { id } });
  revalidatePath("/properties");
}
