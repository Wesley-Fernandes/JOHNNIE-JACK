"use client"
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart';
import { useFood } from '@/hooks/useFood'
import type { FoodCategoryTypes } from '@/types/food';
import { UtensilsCrossed } from 'lucide-react';
import {toast} from "sonner"

export const AddItemButton = () => {
  const {food, complements, quantity} = useFood();
  const {addItem} = useCart();

  const handleAddItem = () => {
    addItem({
      category: food?.category as FoodCategoryTypes,
      id: food?.id as string,
      name: food?.name as string,
      price: food?.price as number,
      quantity,
      thumbnail: food?.thumbnail as string,
      complements,
    });
    toast.success(`${food?.name} adicionado.`,{ icon: <UtensilsCrossed strokeWidth={1} color='red'/>})
  };
  return (
    <Button
    	className="uppercase font-bold flex-1 border-1 shadow-md bg-gradient-to-t from-green-600 to to-green-400 w-full"
      variant="destructive" onClick={handleAddItem}>
		  Adicionar
    </Button>
  )
}
