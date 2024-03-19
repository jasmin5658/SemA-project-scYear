import React from "react";
import { product } from "./Product";

export type UserHistoryPurchases={
    numOfPurchases:number,
    productsArray:product,
    amountPurcahse:number,
    priceOnDayOfPurchase:number,
    dateOfPurchase:Date
}