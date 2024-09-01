import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { FoodFullInterface } from "@/types/food";

interface Props {
	data: FoodFullInterface;
}
export default function Information({ data }: Props) {
	return (
		<Card className="columns-1 flex flex-col gap-2 p-2 h-fit lg:h-[90vh] mt-2 w-full">
			<CardHeader className="font-black uppercase">{data.name}</CardHeader>
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
