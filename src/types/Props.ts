import { ReactNode } from "react";
import { User } from "./User";
import { UserHistoryPurchases } from "./UserHistoryPurchases";
import { ProductPage } from "./ProductPage";

export type ProductProps={
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

//?
export type ShoppingCartProviderProps = {
    children:ReactNode
}
