import React, { createContext, useState, useEffect } from "react";
import { Product } from "../types/Store";
import { ShoppingCart } from "../types/ShoppingCart";

// Create the context
export const ProductsContext = createContext<any>({});


// Functional component for managing products
export default function ProductsProvider({ children }: any) {
  // Define cart items state
  const [cartItems, setCartItems] = useState<ShoppingCart[]>([
    {
      productId: 1,
      productName: 'Blue storm',
      quantity: 1,
      price: 200
    }
  ]);


  // Function to get the quantity of a specific item in the cart
  function getItemQuantity(id: number) {
    const item = cartItems.find((item) => item.productId === id);
    return item ? item.quantity : 0;
  }

  // Function to increase the quantity of an item in the cart
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.productId === id) == null) {
        return [...currItems, { productId: id, quantity: 1, productName: "", price: 0 }];
      } else {
        return currItems.map((item) => {
          if (item.productId === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Function to decrease the quantity of an item in the cart
  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.productId === id)?.quantity === 1) {
        return currItems.filter((item) => item.productId !== id);
      } else {
        return currItems.map((item) => {
          if (item.productId === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // Function to remove an item from the cart
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.productId !== id);
    });
  }

  // Define product state
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Blue storm',
      shortDesc: 'shortDesc',
      longDesc: 'longDesc',
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
  ]);

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
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  };

  // Render the provider with the provided value
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
