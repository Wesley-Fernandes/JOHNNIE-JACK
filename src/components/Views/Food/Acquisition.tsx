"use client";
import { Quantity } from "@/components/quantity";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { calculatePrice } from "@/lib/calculation";
import type { ComplementType, FoodFullInterface } from "@/types/food";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

interface Props {
	quantity: number;
	data: FoodFullInterface;
	complements?: ComplementType[];
	setQuantity: Dispatch<SetStateAction<number>>;
}
export default function Acquisition({
	data,
	quantity,
	complements,
	setQuantity,
}: Props) {
	const [price, setPrice] = useState<string>("");
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const new_price = calculatePrice({
			price: data.price,
			quantity,
			complements,
		});
		setPrice(new_price);
	}, [complements, quantity]);
	return (
		<Card className="flex flex-col items-center gap-1 col-span-1 md:max-w-md">
			<CardHeader className="w-full">
				<CardTitle className="font-black uppercase ">Detalhes</CardTitle>
			</CardHeader>
			<CardContent className="w-full flex items-center gap-2 justify-between">
				<Quantity quantity={quantity} setQuantity={setQuantity} />
				<span className="text-sm">{price}</span>
			</CardContent>
			<CardFooter className="w-full">
				<Button
					variant="destructive"
					className="uppercase font-bold flex-1 border-1 shadow-md bg-gradient-to-t from-green-600 to to-green-400 w-full"
				>
					Adicionar
				</Button>
			</CardFooter>
		</Card>
	);
}
