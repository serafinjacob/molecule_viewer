"use server";
import { FormState, UploadFormSchema } from "../types/form.types";

import { parse } from "./parse.action";
import { save } from "./save.actions";

export async function upload(state: FormState, formData: FormData): Promise<FormState> {
  const validation = UploadFormSchema.safeParse({
    name: formData.get("mol-name") as string,
    file: formData.get("mol-file") as File,
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const file = formData.get("mol-file") as File;
  const { atoms, bonds } = await parse(file);

  const result = await save({ name: validation.data.name, atoms, bonds });

  if (result.success) {
    return { success: result.success };
  } else if (result.error) {
    return { errors: { file: [result.error] } };
  }
}
