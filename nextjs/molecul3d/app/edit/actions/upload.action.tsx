"use server";
import { FormState, UploadFormSchema } from "../types/form.types";

import { save } from "./save.action";
import { update } from "./update.action";

export async function upload(state: FormState, formData: FormData): Promise<FormState> {
  const validation = UploadFormSchema.safeParse({
    name: formData.get("element-name") as string,
    symbol: formData.get("element-symbol") as string,
    atomicNumber: parseInt(formData.get("element-atomicNumber") as string),
    radius: parseInt(formData.get("element-radius") as string),
    color1: formData.get("element-color1") as string,
    color2: formData.get("element-color2") as string,
    color3: formData.get("element-color3") as string,
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  var { name, symbol, atomicNumber, radius, color1, color2, color3 } = validation.data;

  color1 = color1.replace("#", "");
  color2 = color2.replace("#", "");
  color3 = color3.replace("#", "");

  const form_name = formData.get("element-form-name") as string;

  if (form_name === "update") {
    const update_result = await update({ name, symbol, atomicNumber, radius, color1, color2, color3 });

    if (update_result.success) {
      return { success: "Element updated" };
    }

    if (update_result.error) {
      if (update_result.error !== "error 404") {
        return { errors: { save: [update_result.error] } };
      }
    }
  }

  const save_result = await save({ name, symbol, atomicNumber, radius, color1, color2, color3 });

  if (save_result.error) {
    return { errors: { save: [save_result.error] } };
  }

  return { success: save_result.success };
}
