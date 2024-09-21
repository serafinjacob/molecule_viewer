import { z } from "zod";

export const UploadFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[^\s]+$/, {
      message: "Name cannot contain spaces",
    }),
  // ensure file is present, name is not empty, and file is an .sdf
  file: z
    .instanceof(File)
    .refine((file) => file.name.length > 0, {
      message: "File is required",
    })
    .refine((file) => file.name.endsWith(".sdf"), {
      message: "File must be an .sdf",
    }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        file?: string[];
      };
      success?: string;
    }
  | undefined;
