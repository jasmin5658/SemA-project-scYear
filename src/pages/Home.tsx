import { useContext } from "react";
import Nav from "../components/Nav";
import Product from "../components/Product";
import { ProductPage } from "../types/ProductPage";
import { ProductsContext } from "../context/ProductsContext";

export default function Home() {

  const { products } = useContext<any>(ProductsContext)


  return (
    <>
      <Nav />
      <div>Home</div>
      {
        products.map((item: ProductPage) => {
          return <Product product={item} />
        })
      }
    </>
  )
}
