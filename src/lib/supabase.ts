import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Use service role for server-side uploads

export const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Uploads an image to Supabase Storage and returns the public URL.
 * @param file - The image file as a Buffer or Blob.
 * @param fileName - The name to save the file as.
 */
export async function uploadToolImage(file: Buffer | Blob, fileName: string) {
  const { error } = await supabase.storage
    .from("tool-screenshots")
    .upload(fileName, file, {
      contentType: "image/png",
      upsert: true,
    });

  if (error) {
    console.error("Error uploading to Supabase Storage:", error);
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from("tool-screenshots")
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}
