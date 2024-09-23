import { z } from "zod";

export const UploadFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(15, { message: "Name must be less than 15 characters" })
    .regex(/^[^\s]+$/, {
      message: "Name cannot contain spaces",
    }),
  symbol: z
    .string()
    .min(1, { message: "Symbol is required" })
    .max(3, { message: "Symbol must be less than 3 characters" })
    .regex(/^[^\s]+$/, {
      message: "Symbol cannot contain spaces",
    }),
  atomicNumber: z
    .number()
    .min(1, { message: "Atomic Number is required" })
    .max(118, { message: "Atomic Number must be less than 118" }),
  radius: z.number().min(1, { message: "Radius is required" }).max(100, { message: "Radius must be less than 100" }),
  color1: z
    .string()
    .min(1, { message: "Color 1 is required" })
    .max(7, { message: "Color 1 must be less than 7 characters" })
    .regex(/^[^\s]+$/, {
      message: "Color 1 cannot contain spaces",
    }),
  color2: z
    .string()
    .min(1, { message: "Color 2 is required" })
    .max(7, { message: "Color 2 must be less than 7 characters" })
    .regex(/^[^\s]+$/, {
      message: "Color 2 cannot contain spaces",
    }),
  color3: z
    .string()
    .min(1, { message: "Color 3 is required" })
    .max(7, { message: "Color 3 must be less than 7 characters" })
    .regex(/^[^\s]+$/, {
      message: "Color 3 cannot contain spaces",
    }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        symbol?: string[];
        atomicNumber?: string[];
        radius?: string[];
        color1?: string[];
        color2?: string[];
        color3?: string[];
        save?: string[];
      };
      success?: string;
    }
  | undefined;
