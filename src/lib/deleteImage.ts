import { supabase } from "./supabase";

export async function deleteImage(url: string) {
  try {
    if (!url) return;

    const path = url.split("/object/public/teian-images/")[1];

    console.log(path, "ini path");

    if (!path) return;

    const { error } = await supabase.storage
      .from("teian-images")
      .remove([path]);

    if (error) throw error;
  } catch (e) {
    console.log(e);
  }
}
