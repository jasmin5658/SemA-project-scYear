import React from "react";
import Image from "react-bootstrap/Image";
import { ProductComp, ProductPage } from "../types/ProductPage";


export default function Product({ product }: ProductComp) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.id}</p>
      <p>{product.shortDesc}</p>
      <p>{product.longDesc}</p>
      <Image src={product.imag} alt={product.name} width={200} height={200} />
      <p>{product.minQty}</p>
      <p>{product.currQty}</p>
      <p>{product.price}</p>
      <p>{product.discount}</p>
      <img></img>
    </div>
  )
}
