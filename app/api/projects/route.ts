
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
export async function POST(req: Request){const formData=await req.formData(); const body=Object.fromEntries(formData.entries()); if(!supabaseAdmin) return NextResponse.json({error:"Missing Supabase env vars"},{status:500}); const {error}=await supabaseAdmin.from("projects").insert({title:String(body.title||""),category:String(body.category||"Brand"),description:body.description?String(body.description):null,thumbnail_url:String(body.thumbnail_url||""),vimeo_url:String(body.vimeo_url||""),sort_order:Number(body.sort_order||0)}); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.redirect(new URL("/admin", req.url));}
