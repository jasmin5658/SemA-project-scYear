import {  ReactNode } from "react";
import { User } from "./User";
import { UserHistoryPurchases } from "./UserHistoryPurchases";

export type StoreItemProps={
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


export type UserProps = {
    User:User
}

export type UserHistoryPurchasesProps = {
    UserHistoryPurchases:Array<UserHistoryPurchases>
}
export type CartItemProps = {
    id:number;
    quantity:number;
}

export type ShoppingCartProviderProps = {
    children: ReactNode
    isOpen:boolean

}


