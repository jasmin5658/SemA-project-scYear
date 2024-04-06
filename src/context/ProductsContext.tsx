import { createContext, useState, useEffect } from "react";
import { Product } from "../types/Store";
import { ProductsContextProviderProps } from "../types/Props";

// Define interface for context value
interface ProductsContextValue {
  products: Product[];
  addProduct: (item: Product) => void;
  deleteProduct: (item: Product) => void;
  updateStock: (productId: number, quantity: number) => void;
  loadProducts: () => Product[];
}

// Create the context with the defined interface
export const ProductsContext = createContext<ProductsContextValue>({
  products: [],
  addProduct: () => { },
  deleteProduct: () => { },
  updateStock: () => { },
  loadProducts: () => [],
});

export default function ({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(loadProducts);

  function loadProducts(): Product[] {
    let products = localStorage.getItem('products');
    console.log(products);
    if (products) {
      return JSON.parse(products) as Product[];
    }
    return [];
  }

  // Function to add a product
  function addProduct(item: Product) {
    if (!products.some((product) => product.id === item.id)) {
      const updatedProducts = [...products, item];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    else {
      alert('Product already exists in cart');
    }
  }

  // Function to delete a product
  function deleteProduct(item: Product) {
    const updatedProducts = products.filter((product) => product.id !== item.id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  }

  // Function to update product stock
  const updateStock = (productId: number, quantity: number) => {
    const updatedProducts = products.map((product: any) => {
      if (product.id === productId) {
        return { ...product, stock: quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // Context value to provide to consumers
  const value = {
    products,
    addProduct,
    deleteProduct,
    updateStock,
    loadProducts,
  };


  // Render the provider with the provided value
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );



}
