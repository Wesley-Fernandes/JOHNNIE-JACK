"use client";
import Item from "@/components/Item";
import Loader from "@/components/Loader";
import type { FoodFullInterface } from "@/types/food";
import { useQuery } from "react-query";
export default function Page() {
	const { data, isLoading, isError } = useQuery("Drinks", async () => {
		const request = await fetch("/api/foods?category=Bebidas");
		return (await request.json()) as FoodFullInterface[];
	});

	if (isError) return <div>Error :(</div>;
	if (isLoading) return <Loader />;

	if (data)
		return (
			<main className="flex items-center justify-center">
				<section className="p-4 flex flex-col flex-1 gap-4 md:container overflow-y-aut">
					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-col w-full">
						{data.map((i) => (
							<Item {...i} key={i.id} />
						))}
					</ul>
				</section>
			</main>
		);
}
