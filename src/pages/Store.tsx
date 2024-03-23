import Navbar from "../components/Navbar";
import { useContext } from "react";
import Product from "../components/Product";
import { ProductPage } from "../types/ProductPage";
import { ProductsContext } from "../context/ProductsContext";

export default function Store() {

  const { products } = useContext<any>(ProductsContext)

  return (
    <>
      <Navbar />
      
      <div>Store</div>
      {
        products.map((item: ProductPage) => {
          return <Product product={item} />
        })
      }
      
    </>
  )
}
