import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FoodFullInterface } from "@/types/food";

interface Props {
	data: FoodFullInterface;
}
export default function Information({ data }: Props) {
	return (
		<Card className="col-span-1 flex flex-1 flex-col gap-2 p-2 mb-2 mt-2 w-full">
			<CardHeader>
				<CardTitle className="font-black uppercase">{data.name}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col gap-2">
				<div className="w-full overflow-hidden rounded-md h-fit">
					<div className="bg-red-400 w-full max-h-[600px]">
						<img
							src={data.thumbnail}
							alt="foto do prato"
							width={800}
							height={800}
							className=" h-[90%] object-cover"
						/>
					</div>
				</div>
				<p className="text-xs overflow-y-auto p-1 opacity-70 flex-1 border">
					{data.description}
				</p>
			</CardContent>
		</Card>
	);
}
