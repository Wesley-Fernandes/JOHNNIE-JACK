/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { useFood } from "@/hooks/useFood";
import { getFoodById } from "@/lib/food";
import Loader from "@/components/Loader";
import Views from "@/components/Views";
import type { pageProps } from "@/types/page";


export default function FoodById({ params }: pageProps) {
	const [loading, setLoading] = useState(true);
	const {setFood, reset, food} = useFood();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(()=>{
		getFoodById({setFood, reset, setLoading, params});
	}, [params.id])
	if(!food && loading) return <Loader/>
	if(!food && !loading) return <span>Item não existe.</span>
	if (food && !loading)
		return (
			<Views.Food.Main>
				<Views.Food.Header/>
				<Views.Food.Container>
					<Views.Food.Section>
						<Views.Food.Information/>
						<Views.Food.Aside>
							{ food.complements.length > 0 && <Views.Food.Complements/>}
							<Views.Food.Acquisition/>
						</Views.Food.Aside>
					</Views.Food.Section>
				</Views.Food.Container>
			</Views.Food.Main>
		);
}
