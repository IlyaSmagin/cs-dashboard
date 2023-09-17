import { NextResponse } from "next/server";
import supabaseClient from "../components/utils/SupabaseClient";
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	let maxPrice = Number(searchParams.get("maxPrice")) || 0;
	let minPrice = Number(searchParams.get("minPrice")) || 0;
	let limit = Number(searchParams.get("limit"));
	let nameSearch = searchParams.get("search");
	if (limit > 1000 || limit <= 0 || isNaN(limit)) {
		limit = 50;
	}
	if (maxPrice <= 0 || isNaN(maxPrice)) {
		maxPrice = 0;
	}
	if (minPrice <= 0 || isNaN(minPrice)) {
		minPrice = 0;
	}
	const supabase = await supabaseClient();
	if (nameSearch) {
		let { data, error } = await supabase
			.from("prices")
			.select(
				"search:id_item!inner(name), sell_price, buy_price, sold_24h, profit, diff_price, items:items(link, icon, name)"
			)
			.textSearch("search.name", nameSearch, {
				type: "plain",
			})
			.not("sell_price", "is", null)
			.order("diff_price", { ascending: false })
			.lt("sell_price", maxPrice)
			.limit(limit);
		if (data) {
			return NextResponse.json(data);
		} else {
			return NextResponse.json(error);
		}
	} else {
		let { data, error } = await supabase
			.from("prices")
			.select(
				"items(link, name, icon), sell_price, buy_price, sold_24h, profit, diff_price"
			)
			.not("sell_price", "is", null)
			.order("diff_price", { ascending: false })
			.lt("sell_price", maxPrice)
			.limit(limit);
		if (data) {
			return NextResponse.json(data);
		} else {
			return NextResponse.json(error);
		}
	}
}
