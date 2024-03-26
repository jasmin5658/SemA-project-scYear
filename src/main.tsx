import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import ProductsProvider from './context/ProductsContext.tsx';
import UserProvider from './context/UserContext.tsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <UserProvider>
        <ProductsProvider >
          <RouterProvider router={routes} />
        </ProductsProvider >
      </UserProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
)
