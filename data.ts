
import { supabase } from "./supabase";
export async function getProjects() {
  if (!supabase) return [];
  const { data } = await supabase.from("projects").select("*").order("sort_order", { ascending: true });
  return data || [];
}
