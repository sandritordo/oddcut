import { supabase } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data || [];
}
