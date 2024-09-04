import { calculatePrice } from "@/lib/calculation";
import type { ComplementType, FoodFullInterface } from "@/types/food"
import {create} from "zustand"

interface Props{
    complements: ComplementType[];
    quantity: number,
    food: FoodFullInterface|null;
    price: () => string;
    setComplements: (complement:ComplementType) => void;
    removeComplement: (id: string) => void;
    setFood: (food: FoodFullInterface) => void;
    descreseQuantity: ()=>void;
    increaseQuantity: ()=>void;
    reset: ()=>void;
}

export const useFood =  create<Props>((set, get)=>({
    complements: [],
    food: null,
    quantity: 1,
    setComplements: (complement: ComplementType) => set({complements: [...get().complements, complement]}),
    removeComplement: (id: string) => set({complements: get().complements.filter((complement: ComplementType) => complement.id!== id)}),
    setFood: (food: FoodFullInterface) => set({food}),
    descreseQuantity: () => set({quantity: get().quantity - 1}),
    increaseQuantity: () => set({quantity: get().quantity + 1}),
    price: () => {
        return calculatePrice({
            price: get().food?.price?? 0,
            quantity: get().quantity,
            complements: get().complements
        })
    },
    reset: () => set({complements: [], food: null, quantity: 1})
}))