import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';
import ProductsProvider from './context/ProductsContext.tsx';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider >
    <RouterProvider router={routes} />
    </ProductsProvider >
  </React.StrictMode>,
)
