import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComplementOptional } from "./ComplementOptional";

export default function Complements() {

	return (
		<Card className="col-span-1 flex flex-1 flex-col gap-2 p-2 min-h-[218px] md:max-w-md">
			<CardHeader>
				<CardTitle className="font-black uppercase">Complementos</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				<ComplementOptional />
			</CardContent>
		</Card>
	);
}
