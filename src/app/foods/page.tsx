"use client";
import Loader from "@/components/Loader";
import Views from "@/components/Views";
import { getFoodsByType } from "@/lib/food";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { FoodCategoryTypes, FoodFullInterface } from "@/types/food";
export default function Page() {
	const params = useSearchParams();
	const type =  params.get('type') as FoodCategoryTypes;
	const [loading, setLoading] = useState(true);
	const [foods, setFoods] = useState<FoodFullInterface[]>([]);

	useEffect(()=>{
		getFoodsByType({setFoods, setLoading, type: type||"Bebidas"})
	}, [type])

	if (loading) return <Loader />;
	if(!loading && !foods) return <span>Sem dados para mostrar</span>
	if (foods)
		return (
			<Views.Foods.Main>
				<Views.Foods.Header label={String(type?.toUpperCase())}/>
				<Views.Foods.Section>
					<Views.Foods.Items data={foods}/>
				</Views.Foods.Section>
			</Views.Foods.Main>
		);
}
