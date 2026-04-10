
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
export async function POST(req: Request){const formData=await req.formData(); const body=Object.fromEntries(formData.entries()); if(!supabaseAdmin) return NextResponse.json({error:"Missing Supabase env vars"},{status:500}); const {error}=await supabaseAdmin.from("inquiries").insert({name:String(body.name||""),email:String(body.email||""),subject:String(body.subject||""),message:String(body.message||"")}); if(error) return NextResponse.json({error:error.message},{status:500}); return NextResponse.redirect(new URL("/contacto", req.url));}
