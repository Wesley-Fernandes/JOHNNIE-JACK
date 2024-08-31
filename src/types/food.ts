//import { Prisma } from "@prisma/client";
//import { DeliveryPartial } from "./delivery";

import type { Prisma } from "@prisma/client";

export type CategoryTypes = "Bebidas"|"Lanches";

export type FoodType = Prisma.FoodGetPayload<{
    select: {
        thumbnail: true;
        name: true;
        category: true;
        price: true;
        description: true;
        complements: true;
        enabled: true;
    }
}>;

export type ComplementType = Prisma.ComplementGetPayload<{
    select:{
        name: true;
        price: true;
        thumbnail: true;
        id?: true;
    }
}>
export interface FoodFullInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
    description: string;
    complements: ComplementType[];
};


export interface FoodInterface{
    id: string;
    thumbnail: string;
    name: string;
    category: CategoryTypes;
    price: number;
};