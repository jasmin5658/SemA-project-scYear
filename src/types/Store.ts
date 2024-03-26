
// Interface for a product
export type Product = {
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
  
  // Interface for filtering products by price range
  export type PriceRange = {
    minPrice: number;
    maxPrice: number;
  }
  
  // Interface for sorting products
  export enum SortBy {
    PRICE_ASC = 'priceAsc',
    PRICE_DESC = 'priceDesc',
  }
  
  // Interface for the entire store state
  export type StoreState ={
    products: Product[];
    searchTerm: string;
    priceRange: PriceRange;
    sortBy: SortBy;
  }
  

export type productInCart = {
  
}

export type cart ={
  products:productInCart[]
}