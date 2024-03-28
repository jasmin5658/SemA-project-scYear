import { createContext, useState, useEffect } from "react";
import { User } from "../types/User";
import { UserContextProviderProps } from "../types/Props";
// Create the user context
export const UserContext = createContext({});

// UserProvider component
export default function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([{
    email: "",
    Fname: "",
    Lname: "",
    phone: "",
    image: "",
    birthDate: new Date(),
    password: "",
    isActive: true,
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
      setUsers(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    users,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
