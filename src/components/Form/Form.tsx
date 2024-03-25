import { FormEvent, useContext, useState } from "react"
import { ProductsContext } from "../../context/ProductsContext"
import { Product } from "../../types/Store";
export default function Form() {
  const { addProduct } = useContext<any>(ProductsContext);

  const [product, setProduct] = useState<Product>({
    id: 0,
    name: '',
    shortDesc: '',
    longDesc: '',
    imag: '',
    minQty: 0,
    currQty: 0,
    price: 0,
    discount: 0
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(product.id==0 || product.name=='' || product.shortDesc=='' || product.imag=='' || product.minQty==0 || product.currQty==0 || product.price==0){
      alert("invalid info")
      return;
    }
    addProduct(product);
  }

  return (
    <>
    <form onSubmit={handleSubmit}></form>
      <div>
<label>Id</label>
<input type="number"
onChange={(event)=>setProduct({...product,id:Number(event.target.value)})}/>
      </div>

    <div>
<label>Name</label>
<input type="text"
onChange={(event)=>setProduct({...product,name:String(event.target.value)})}/>
      </div>

    <div>
<label>shortDesc</label>
<input type="text"
onChange={(event)=>setProduct({...product,shortDesc:String(event.target.value)})}/>
      </div>

    <div>
<label>longDesc</label>
<input type="text"
onChange={(event)=>setProduct({...product,longDesc:String(event.target.value)})}/>
      </div>

    <div>
<label>imag</label>
<input type="text"
onChange={(event)=>setProduct({...product,imag:String(event.target.value)})}/>
      </div>

    </>
  )

}