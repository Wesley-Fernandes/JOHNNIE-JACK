import type {  DeliveryOrderPartial } from "./delivery";
import type { ComplementType, FoodCategoryTypes } from "./food";
import type { UserInterface } from "./user";

export type ItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    category: FoodCategoryTypes;
    complements?: ComplementType[];
}

export type OrderStatusTypes = "Preparando" | "Entregando" | "Cancelado"|"Solicitando";

export interface OrderInterface{
    id?: string;
    items: ItemType[];
    delivery: DeliveryOrderPartial;
    user: UserInterface;
    status: OrderStatusTypes;
    timer?: number;
};

