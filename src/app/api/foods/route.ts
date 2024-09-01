import database from "@/lib/prisma";
import type { CategoryTypes } from "@/types/food";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
	try {
		const url = new URL(request.url as string);
		const category: CategoryTypes = url.searchParams.get(
			"category",
		) as CategoryTypes;
		if (!category)
			return NextResponse.json(
				{ message: "Missing category query" },
				{ status: 400 },
			);
		const foods = await database.food.findMany({ where: { category } });
		return NextResponse.json(foods, { status: 200 });
	} catch (err) {
		return NextResponse.json(
			{ message: "Erro interno. Tente novamente" },
			{ status: 500 },
		);
	}
}
