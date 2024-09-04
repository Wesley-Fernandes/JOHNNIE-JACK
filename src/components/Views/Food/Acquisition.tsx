"use client";
import { Quantity } from "@/components/quantity";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AddItemButton } from "./AddItemButton";
import { useFood } from "@/hooks/useFood";

export default function Acquisition() {
	const {price} = useFood();

	return (
		<Card className="flex flex-col items-center gap-1 col-span-1 md:max-w-md">
			<CardHeader className="w-full">
				<CardTitle className="font-black uppercase ">Detalhes</CardTitle>
			</CardHeader>
			<CardContent className="w-full flex items-center gap-2 justify-between">
				<Quantity/>
				<span className="text-sm">{price()}</span>
			</CardContent>
			<CardFooter className="w-full">
				<AddItemButton/>
			</CardFooter>
		</Card>
	);
}
