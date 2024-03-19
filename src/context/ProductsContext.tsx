import { createContext, useState, useEffect } from "react";
import { ProductPage } from "../types/ProductPage";

// יצירת הקונטקסט
export const ProductsContext = createContext<any>({});

// יצירת קומפוננטה פונקציונלית עבור ניהול מוצרים
export default function ProductsProvider({ children }: any) {
  const [products, setProducts] = useState<ProductPage[]>([ {
    id: 1,
    name: 'purple flower',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    imag: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
    minQty: 1,
    currQty: 1,
    price: 100,
    discount: 10

  },
  {
    id: 2,
    name: 'red flower',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    imag: 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/revolution-red-gerbera-daisy-red-with-dark-eye-flower-proven-winners_16172.jpg',
    minQty: 1,
    currQty: 1,
    price: 290,
    discount: 13
  },
  {
    id: 3,
    name: 'yellow flower',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    imag: 'https://img.freepik.com/free-photo/yellow-flower-white-background_1203-2149.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais',
    minQty: 1,
    currQty: 1,
    price: 200,
    discount: 90
  }]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  // פונקציה שמקבלת את שם המוצר ומוסיפה במידה ולא קיים במאגר
function addProduct(item:ProductPage) {
    if (!products.some((product) => product.id === item.id)) {
      const updatedProducts = [...products];
      updatedProducts.push(item);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  }

  // פונקציה שמקבלת את שם המוצר ומוחקת אותו מהמאגר אם קיים
  function deleteProduct(item: ProductPage) {
    if (products.some((product) => product.id === item.id)) {
      const updatedProducts = products.filter((product) => product.id !== item.id);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
  }

  // כל המידע שנרצה לשתף עם קומפוננטות אחרות
  const value = {
    products,
    addProduct,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
