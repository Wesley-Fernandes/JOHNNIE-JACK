import database from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	try {
		console.log("Get by id");
		if (!params.id)
			return NextResponse.json(
				{ message: "ID está faltando." },
				{ status: 404 },
			);
		const data = await database.food.findUnique({
			where: {
				id: params.id,
			},
			include: {
				complements: true,
			},
		});
		if (!data)
			return NextResponse.json(
				{ message: "Prato não encontrado." },
				{ status: 404 },
			);
		return NextResponse.json(data, { status: 200 });
	} catch (err) {
		return NextResponse.json(
			{ message: "Erro interno. Tente novamente" },
			{ status: 500 },
		);
	}
}
