import type {  DeliveryOrderPartial } from "./delivery";
import type { ComplementType } from "./food";
import type { UserInterface } from "./user";

export type ItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    category: string;
    complements?: ComplementType[];
}

export type CategoryTypes = "Preparando" | "Entregando" | "Cancelado"|"Solicitando";

export interface OrderInterface{
    id?: string;
    items: ItemType[];
    delivery: DeliveryOrderPartial;
    user: UserInterface;
    status: CategoryTypes;
    timer?: number;
};

