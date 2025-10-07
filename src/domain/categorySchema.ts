import { z } from "zod";

export const CategoryType = z.enum([
    "SYSTEM",
    "CUSTOM",
])

export const CategorySchema = z.object({
    id: z.string(),
    categoryName: z.string(),
    categoryType: CategoryType.default("SYSTEM"),
    userId: z.string().nullable(),
    isDeleted: z.boolean(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type Category  = z.infer<typeof CategorySchema>
export type Categories = z.infer<typeof CategorySchema[]>