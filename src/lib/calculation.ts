import { CategoryTypes, ComplementType, FoodFullInterface } from "@/types/food";
import type { ItemType } from "@/types/Order";

interface calculateTotalProps {
    data: FoodFullInterface;
    quantity: number;
    complements: ComplementType[];
}


export const calculateTotal = ({complements, quantity, data}:calculateTotalProps) => {

    let total = data.price * quantity;
    // biome-ignore lint/complexity/noForEach: <explanation>
    complements.forEach((complement) => {
      total += complement.price * quantity;
    });
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
};

interface calculateCartItemsProps{
  cart: ItemType[];
}

export const calculateCartItems = ({cart}:calculateCartItemsProps) => {
  let stock = 0;
  // biome-ignore lint/complexity/noForEach: <explanation>
  cart.forEach((item) => {
    const complements = item.complements ? item.complements.reduce((acc:number, item:FoodFullInterface) => acc + item.price, 0): 0;
    stock += (item.price + complements) * item.quantity;
  })

  return stock.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
}


export const  groupByCategory = (foods: FoodFullInterface[]): Record<CategoryTypes, FoodFullInterface[]> => {
  return foods.reduce((acc, food) => {
      if (!acc[food.category]) {
          acc[food.category] = [];
      }
      acc[food.category].push(food);
      return acc;
  }, {} as Record<CategoryTypes, FoodFullInterface[]>);
}

export const money = (value:number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})