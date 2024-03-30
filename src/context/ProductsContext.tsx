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
          name: 'Ocean',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/Ocean.jpg',
          minQty: 3,
          currQty: 4,
          price: 410.00,
          discount: 10

        },
        {
          id: 2,
          name: 'Pink storm',
          shortDesc: 'oil colors',
          longDesc: '',
          imag: '../public/images/pink.jpg',
          minQty: 1,
          currQty: 6,
          price: 200.00,
          discount: 11
        },
        {
          id: 3,
          name: 'Rainbow',
          shortDesc: 'oil colors',
          longDesc: '',
          imag: '../public/images/rainbow.jpg',
          minQty: 1,
          currQty: 1,
          price: 350,
          discount: 0
        },
        {
          id: 4,
          name: 'Childhood',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/childhood.jpg',
          minQty: 5,
          currQty: 5,
          price: 416.99,
          discount: 0
        },
        {
          id: 5,
          name: 'forest',
          shortDesc: 'oil colors',
          longDesc: 'longDesc',
          imag: '../public/images/trees.jpg',
          minQty: 1,
          currQty: 1,
          price: 524.00,
          discount: 12
        },
        {
          id: 6,
          name: 'Home',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/home.jpg',
          minQty: 10,
          currQty: 10,
          price: 350.99,
          discount: 5
        },
        {
          id: 7,
          name: 'happy storm',
          shortDesc: 'oil colors',
          longDesc: 'longDesc',
          imag: '../public/images/opb.jpg',
          minQty: 1,
          currQty: 0,
          price: 433.12,
          discount: 10
        },
        {
          id: 8,
          name: 'sad storm',
          shortDesc: ' oil colors',
          longDesc: '',
          imag: '../public/images/obb.jpg',
          minQty: 1,
          currQty: 1,
          price: 490,
          discount: 0
        },
        {
          id: 10,
          name: 'Yellow sorm',
          shortDesc: 'oil colors',
          longDesc: 'longDesc',
          imag: '../public/images/yellow.jpg',
          minQty: 1,
          currQty: 1,
          price: 287.20,
          discount: 0
        },
        {
          id: 11,
          name: 'Pain',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/pain.jpg',
          minQty: 1,
          currQty: 1,
          price: 100.99,
          discount: 40
        },
        {
          id: 12,
          name: 'Mysterious woman',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/women.jpg',
          minQty: 9,
          currQty: 8,
          price: 120.99,
          discount: 14
        },
        {
          id: 13,
          name: 'Waves',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/waves.jpg',
          minQty: 1,
          currQty: 1,
          price: 590.90,
          discount: 0
        },
        {
          id: 14,
          name: 'kitty cat',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/cat.jpg',
          minQty: 1,
          currQty: 1,
          price: 234.90,
          discount: 9
        },
        {
          id: 15,
          name: 'Love of fox mom',
          shortDesc: 'water colors',
          longDesc: '',
          imag: '../public/images/fox.jpg',
          minQty: 12,
          currQty: 13,
          price: 242.90,
          discount: 8
        },
        {
        id: 16,
        name: 'Blue storm',
        shortDesc: 'oil colors',
        imag: '../public/images/blue.jpg',
        minQty: 1,
        currQty: 0,
        price: 202.90,
        discount: 10
        },
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
