import { createContext, useState, useEffect } from "react";
import { Product } from "../types/Store";

// Create the context
export const ProductsContext = createContext<any>({});
export default function ProductsProvider({ children }: any) {

  const [products, setProducts] = useState<Product[]>([]);


  function loadProducts(): Product[] {
    let products = localStorage.getItem('products');
    if (products) //if(products !== undefined)
      return JSON.parse(products) as Product[];
    return [];
  }

  // Load products from localStorage on initial component mount
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Function to add a product
  function addProduct(item: Product) {
    if (!products.some((product) => product.id === item.id)) {
      const updatedProducts = [...products, item];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
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

  useEffect(() => {
    let products = loadProducts();
    if (products.length == 0) {
      products = [
        {
          id: 1,
          name: 'Blue storm',
          shortDesc: 'shortDesc',
          imag: '../public/images/blue.jpg',
          minQty: 1,
          currQty: 0,
          price: 200,
          discount: 10
        },
        {
          id: 2,
          name: 'Pink storm',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/pink.jpg',
          minQty: 1,
          currQty: 6,
          price: 200,
          discount: 10
        },
        {
          id: 3,
          name: 'Rainbow',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/rainbow.jpg',
          minQty: 1,
          currQty: 1,
          price: 350,
          discount: 0
        },
        {
          id: 4,
          name: 'sad storm',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/obb.jpg',
          minQty: 1,
          currQty: 0,
          price: 490,
        },
        {
          id: 5,
          name: 'happy storm',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/opb.jpg',
          minQty: 1,
          currQty: 0,
          price: 433,
          discount: 10
        },
        {
          id: 6,
          name: 'Yellow sorm',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/yellow.jpg',
          minQty: 1,
          currQty: 1,
          price: 287,
          discount: 0
        },
        {
          id: 7,
          name: 'forest',
          shortDesc: 'shortDesc',
          longDesc: 'longDesc',
          imag: '../public/images/trees.jpg',
          minQty: 1,
          currQty: 1,
          price: 524,
          discount: 12
        }
      ];
      setProducts(products); // <-- Set default products into state
      localStorage.setItem('products', JSON.stringify(products)); // <-- Store default products in localStorage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Render the provider with the provided value
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
