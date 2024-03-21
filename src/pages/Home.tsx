import { useContext } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { ProductPage } from "../types/ProductPage";
import { ProductsContext } from "../context/ProductsContext";

export default function Home() {

  const { products } = useContext<any>(ProductsContext)


  return (
    <>
      <Navbar />
      <div>Home</div>
      {
        products.map((item: ProductPage) => {
          return <Product product={item} />
        })
      }
    </>
  )
}
