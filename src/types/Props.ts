import { ReactElement, ReactNode } from "react";
import { User } from "./User";
import { UserHistoryPurchases } from "./UserHistoryPurchases";
import { ProductPage } from "./ProductPage";

export type Product={
    id: number;
    name: string;
    shortDesc: string;
    longDesc?: string;
    imag: string;
    minQty: number;
    currQty: number;
    price: number;
    discount?: number;   
}
export type ProductPageProps = {
    productList:Array<ProductPageProps>
}


export type ProductComp = {
    product:ProductPage
}


export type UserProps = {
    User:User
}

export type UserHistoryPurchasesProps = {
    UserHistoryPurchases:Array<UserHistoryPurchases>
}

export type ShoppingCartProps = {
    isOpen:boolean
}

export type CartItemsProps = {
    id:number;
    quantity:number;
}

export type ShoppingCartProviderProps = {
    children: ReactElement | ReactElement[]
}


