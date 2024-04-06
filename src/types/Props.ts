import {  ReactElement, ReactNode } from "react";
import { User } from "./CustomerProfile";
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
    category: string; 
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
    id: number;
quantity:number    
updateProductStock: (productId: number, quantity: number) => void; // Add the updateProductStock prop
}

export type ShoppingCartProviderProps = {
    children: ReactNode
}

export type ShoppingCartProps = { 
    isOpen:boolean
}

export type UserContextProviderProps = {
    children: ReactElement | ReactElement[]
}

export type ProductsContextProviderProps={
    id: number;
    name: string;
    shortDesc: string;
    longDesc?: string;
    imag: string;
    minQty: number;
    currQty: number;
    price: number;
    discount?: number;  
    category: string; 
 
    
    children: React.ReactNode;
}

