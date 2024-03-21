import { createContext, useState, useEffect } from 'react';
import React from 'react';

// יצירת הקונטקסט
export const StoreContext = createContext<any>({});

// יצירת קומפוננטה פונקציונלית עבור ניהול החנות
export default function StoreProvider({ children }: any) {
  // מערך המוצרים
  const [products, setProducts] = useState<any[]>([]);

  // טעינת המוצרים מה-localStorage בטעינה הראשונה של המערכת
  useEffect(() => {
    const loadProducts = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products') || "[]");
      setProducts(storedProducts);
    };
    loadProducts();
  }, []);

  // פונקציה להוספת מוצר למלאי
  const addProduct = (productDetails: any) => {
    const updatedProducts = [...products, productDetails];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  // פונקציה לעדכון מלאי מוצר
  const updateStock = (productId: string, quantity: number) => {
    const updatedProducts = products.map((product: any) => {
      if (product.id === productId) {
        return { ...product, stock: quantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const value = {
    products,
    addProduct,
    updateStock,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

