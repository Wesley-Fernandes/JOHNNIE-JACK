import type { FoodCategoryTypes, FoodFullInterface } from "@/types/food";

interface GetFoodProps{
    reset: () => void;
    setFood: (food: FoodFullInterface) => void;
    setLoading: (loading: boolean) => void;
    params: {
        id: string;
    }
}

export const getFoodById = async ({params, reset, setFood, setLoading}:GetFoodProps) =>{
    reset();
    const req = await fetch(`/api/foods/${params.id}`);
    const result = (await req.json()) as FoodFullInterface;
    setFood(result);
    setLoading(false);
}

interface GetFoodsProps{
    type: FoodCategoryTypes;
    setLoading: (loading: boolean) => void;
    setFoods: (foods: FoodFullInterface[]) => void;
}
export const getFoodsByType = async ({type, setFoods, setLoading}:GetFoodsProps) =>{
    const request = await fetch(`/api/foods?category=${type}`);
    const converted =  await request.json()  as FoodFullInterface[]
    setFoods(converted);
    setLoading(false);
}