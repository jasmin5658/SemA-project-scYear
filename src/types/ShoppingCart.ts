
export type ShoppingCart = {
    productId: number; // מספר מזהה מוצר
    productName: string; // שם מוצר
    quantity: number; // כמות מוצרים בעגלה
    price: number; // מחיר פר יחידה
   
  }

   export type CartItems ={
    quantity: number;
    productName: string;
    cartQuantity: number;
    price: number;
}