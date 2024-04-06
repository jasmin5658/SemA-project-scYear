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
    category: string; 
 
}

export type ProductsContextType ={
  products: Product[];
  addProduct: (item: Product) => void;
  deleteProduct: (item: Product) => void;
  updateStock: (productId: number, quantity: number) => void;
  loadProducts: () => void;
}


  
