import { createClient } from "@supabase/supabase-js";
import { CS_ITEM } from "../Table/Table";

export default async function supabase() {
	return createClient<CS_ITEM>(
		process.env.NEXT_PUBLIC_SUPABASE_APP!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			auth: { persistSession: false },
		}
	);
}
