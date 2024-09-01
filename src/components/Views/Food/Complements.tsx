"use client"
import { Complement } from "@/components/Complement";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ComplementType } from "@/types/food";
import type { Dispatch } from "react";
interface Props {
	complements?: ComplementType[];
	setComplements: Dispatch<React.SetStateAction<ComplementType[]>>;
}
export default function Complements({ complements, setComplements }: Props) {
	return (
		<Card className="col-span-1 flex flex-col gap-2 p-2 min-h-[218px] md:max-w-md">
			<CardHeader>
				<CardTitle className="font-black uppercase">Complementos</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<div className="flex flex-col gap-1 p-1">
					{!complements || complements.length < 1 ? (
						<span>Esse item não têm complementos.</span>
					) : (
						complements.map((complement) => {
							return (
								<Complement
									complement={complement}
									key={complement.name}
									setComplements={setComplements}
								/>
							);
						})
					)}
				</div>
			</CardContent>
		</Card>
	);
}
