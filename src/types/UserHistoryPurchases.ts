import React from "react";
    import {ProductPage } from "./ProductPage";
export type UserHistoryPurchases={
    numOfPurchases:number,
    productsArray:ProductPage,
    amountPurcahse:number,
    priceOnDayOfPurchase:number,
    dateOfPurchase:Date
}