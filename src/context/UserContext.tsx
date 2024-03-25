import React, { createContext, useState, useEffect } from "react";
import { User } from "../types/User";

// Create the user context
export const UserContext = createContext<any>({});

// UserProvider component
export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<User[]>([{
    email: "",
    Fname: "",
    Lname: "",
    phone: "",
    image: "",
    birthDate: new Date(),
    password: "",
    isActive: false,
    address: {
        city: "",
        street: "",
        homeNumber: 0
    },
    deliveryAddress: {
        city: "",
        street: "",
        homeNumber: 0
    },
    UserHistoryPurchases:[ {
        numOfPurchases: 0,
        productsArray: {
            ProductId: 0, 
            amountPurcahse: 0
        },
        priceOnDayOfPurchase: 0,
        dateOfPurchase: new Date()
    }]
  }]);

  useEffect(() => {
    // Fetch user data or load from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    user,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
