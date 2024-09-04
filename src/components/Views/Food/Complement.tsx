/* eslint-disable @next/next/no-img-element */
"use client";
import { Switch } from "@/components/ui/switch";
import type { ComplementType } from "@/types/food";

interface Props {
	complement: ComplementType;
	setComplement: (value: ComplementType) => void;
	removeComplement: (id: string) => void;
}


export const Complement = ({complement, setComplement, removeComplement}: Props) => {
	const handleToggle = (checked: boolean) => {
		switch (checked) {
			case true:
				return setComplement(complement);
			case false:
				return removeComplement(complement.id);
		}
	};

	return (
		<div
			key={complement.name}
			className="flex items-center justify-between gap-1">
			<div className="flex items-center gap-2">
				<div className="w-10 h-10 border p-1 rounded-md">
					<img
						src={complement.thumbnail}
						alt={complement.name}
						className="w-full h-full mr-2 rounded-sm"
					/>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold">{complement.name}</span>
					<span className="text-xs opacity-60">
						{complement.price.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
				</div>
			</div>
			<Switch onCheckedChange={handleToggle} />
		</div>
  )
}
