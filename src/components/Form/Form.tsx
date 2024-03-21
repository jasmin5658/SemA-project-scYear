import { FormEvent, useContext, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"

export default function Form() {
  const { addProduct } = useContext<any>(ProductsContext);

  const [productName, setProductName] = useState<string>("");

  function Update(event: FormEvent) {
    event.preventDefault();
    addProduct(productName);
    setProductName("");
  }

  return (
    <>
      <form onSubmit={Update}>
        <input type="text"
          placeholder="Name...."
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>


    </>
  )
}
