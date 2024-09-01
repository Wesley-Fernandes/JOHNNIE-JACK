/* eslint-disable @next/next/no-img-element */
"use client";
import Loader from "@/components/Loader";
import Views from "@/components/Views";
import type { ComplementType, FoodFullInterface } from "@/types/food";
import type { pageProps } from "@/types/page";
import { useState } from "react";
import { useQuery } from "react-query";

export default function FoodById({ params }: pageProps) {
	const [quantity, setQuantity] = useState<number>(1);
	const [complements, setComplements] = useState<ComplementType[]>([]);
	const { isLoading, error, data } = useQuery({
		queryKey: ["food"],
		queryFn: async () => {
			const req = await fetch(`/api/foods/${params.id}`);
			const result = (await req.json()) as FoodFullInterface;
			console.log(result);
			return result;
		},
		refetchOnWindowFocus: false,
	});

	if (!data && !isLoading && !error && data == null)
		return <span>Não existe.</span>;
	if (!data && isLoading) return <Loader />;
	if (error) return <span>Houve um erro</span>;
	if (data)
		return (
			<main className="min-h-[calc(100vh-3.5rem)] max-h-[calc(100vh-3.5rem)] overflow-y-auto flex justify-center">
				<section className="container grid grid-cols-1 sm:grid-cols-2 gap-2 align-middle p-1">
					<Views.Food.Information data={data} />
					<div className="col-span-1 flex flex-col gap-2 pb-2 mt-2">
						<Views.Food.Complements
							complements={data.complements}
							setComplements={setComplements}
						/>
						<Views.Food.Acquisition
							data={data}
							quantity={quantity}
							complements={complements}
							setQuantity={setQuantity}
						/>
					</div>
				</section>
			</main>
		);
}
