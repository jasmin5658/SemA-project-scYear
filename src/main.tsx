import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import ProductsProvider from './context/ProductsContext.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx';
import UserContextProvider from './context/UserContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <UserContextProvider>
    <ShoppingCartProvider>
        <ProductsProvider >
          <RouterProvider router={routes} />
        </ProductsProvider >
    </ShoppingCartProvider>
      </UserContextProvider>
  </React.StrictMode>
)
