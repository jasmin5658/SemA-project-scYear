import { createContext, useState, useEffect } from "react";
import { User } from "../types/CustomerProfile";

// Create the user context with a more descriptive type for its value
export const UserContext = createContext<{
  users: User[];
  registerClient: (newUser: User) => void;
  logoutClient: (email: string) => void;
  editClient: (updatedUser: User) => void;
  loadClients: () => void;
  loginClient: (email: string, password: string) => void;
}>({
  users: [],
  registerClient: () => { },
  logoutClient: () => { },
  editClient: () => { },
  loadClients: () => { },
  loginClient: () => { },
});

export default function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([{
    email: "",
    Fname: "",
    Lname: "",
    phone: "",
    image: "",
    birthDate: new Date(),
    password: "",
    confirmPassword: "",
    isActive: true,
    address: {
      city: "",
      street: "",
      homeNumber: 0,
    },
    deliveryAddress: {
      city: "",
      street: "",
      homeNumber: 0,
    },
    UserHistoryPurchases: [
      {
        numOfPurchases: 0,
        productsArray: {
          ProductId: 0,
          amountPurcahse: 0,
        },
        priceOnDayOfPurchase: 0,
        dateOfPurchase: new Date(),
      },
    ],
  }]);

  // Load clients from localStorage asynchronously
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      try {
        setUsers(JSON.parse(storedUsers) as User[]); // Safely parse as User[]
      } catch (error) {
        console.error("Error parsing stored users:", error); // Handle parsing errors
      }
    }
  }, []);

  const registerClient = (newUser: User) => {
    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify(users));
    // Success message and redirect to profile
    console.log("Registration successful!"); // Replace with on-screen message and redirect
  };

  const logoutClient = (email: string) => {
    setUsers(users.filter((user) => user.email !== email));
    localStorage.removeItem('users');
  };

  const editClient = (updatedUser: User) => {
    const userIndex = users.findIndex((user) => user.email === updatedUser.email);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      setUsers([...users]); // Trigger re-render
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  const loadClients = () => {
    // This function is now empty as we're loading from localStorage in useEffect
  }; // Optional comment explaining the removal


  const loginClient = (email: string, password: string) => {
    const foundUser = users.find((user) => user.email === email && user.password === password);
    if (foundUser) {
      // Login successful actions
      console.log("Login successful!");
      // Implement logic to handle successful login, e.g., redirect to profile
    } else {
      localStorage.removeItem('users'); // Clear local storage if login fails
      console.log("Invalid email or password. Please try again or sign up.");
      // Display an appropriate message to the user
    }
  };

  // Placeholders for UI elements

  const handleLogin = (email: string, password: string) => {
    loginClient(email, password);
  };

  const handleRegister = (newUser: User) => {
    registerClient(newUser);
  };


  const value = {
    users,
    registerClient,
    logoutClient,
    editClient,
    loadClients,
    loginClient,
    handleLogin,
    handleRegister
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
