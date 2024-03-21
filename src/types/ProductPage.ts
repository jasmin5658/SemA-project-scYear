
export type ProductPage = {
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
    productList:Array<ProductPage>
}

export type ProductComp = {
    product:ProductPage
}