import database from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import type { FoodCategoryTypes } from "@/types/food";

export async function GET(request: NextApiRequest) {
	try {
		const url = new URL(request.url as string);
		const category: FoodCategoryTypes = url.searchParams.get(
			"category",
		) as FoodCategoryTypes;
		if (!category)
			return NextResponse.json(
				{ message: "Missing category query" },
				{ status: 400 },
			);
		const foods = await database.food.findMany({ where: { category }, select: {
			name: true,
			description: true,
			price: true,
			id: true,
			thumbnail: true
		}});
		return NextResponse.json(foods, { status: 200 });
	} catch (err) {
		return NextResponse.json(
			{ message: "Erro interno. Tente novamente" },
			{ status: 500 },
		);
	}
}
