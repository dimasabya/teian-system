import { supabase } from "./supabase";

export async function uploadImage(file: File, folder: string) {
  const extension = file.name.split(".").pop();

  const fileName = `${folder}/${Date.now()}.${extension}`;

  const { error } = await supabase.storage
    .from("teian-images")
    .upload(fileName, file, {
      cacheControl: "31536000",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage.from("teian-images").getPublicUrl(fileName);

  return data.publicUrl;
}
