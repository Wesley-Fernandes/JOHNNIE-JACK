"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFood } from "@/hooks/useFood";

export function Quantity() {
	const {quantity, increaseQuantity, descreseQuantity} = useFood();
	const handleDecrement = () => {
		if (quantity > 1) {
			descreseQuantity();
		}
	};

	const handleIncrement = () => {
		if (quantity < 9) {
			increaseQuantity();
		}
	};
	return (
		<div className="flex items-center w-fit gap-1 py-1">
			<Button onClick={handleDecrement} size={"icon"} variant="outline">
				<Minus strokeWidth={1} />
			</Button>
			<Input
				type="number"
				disabled
				value={quantity}
				min={1}
				className="w-10 pr-0 text-center bg-zinc-700 text-white"
			/>
			<Button onClick={handleIncrement} size={"icon"} variant="outline">
				<Plus strokeWidth={1} />
			</Button>
		</div>
	);
}
