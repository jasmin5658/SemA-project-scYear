// import { Link } from "react-router-dom";
// import { Button, Card, CardTitle } from "react-bootstrap";
// import { formatCurrency } from "../types/formatCurrency";
// import Navbar from "./Navbar";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { StoreItemProps } from "../types/Props";


// export default function ChosenProduct({
//     id,
//     imag,
//     name,
//     shortDesc,
//     longDesc,
//     minQty,
//     currQty,
//     price,
//     discount,

// }: StoreItemProps) {

//     const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

//     const quantity = id !== undefined ? getItemQuantity(id) : 0;


//     if (!id) {
//         return (
//             <>
//                 <h1>Not found</h1>
//                 <Link to="/">Home</Link>
//             </>
//         )
//     }

//     return (
//         <>
//             {onlyToSpecific && (
//                 <>
//                     <Navbar/>
//                 </>
//             )}
//             <div className={onlyToSpecific ? 'specific-containter' : 'cards-container'}>

//                 <Card className={onlyToSpecific ? 'specific-card' : ''}>
//                     <Card.Img
//                         className={onlyToSpecific ? 'specific-image' : ''}
//                         variant="top"
//                         src={imag}
//                         height="230px"
//                         style={{ objectFit: "contain", padding: "15px" }}
//                     />
//                     <Card.Body className={onlyToSpecific ? 'specific-body' : 'd-flex flex-column product-card'}>
//                         <div className='d-flex justify-content-between w-100 align-items-baseline mb-4'>
//                             <span style={{ fontSize: '1.1em' }}>{name}</span>
//                             <span className='d-flex align-items-center'>
//                                 {/* מחיר מוצר רגיל  */}
//                                 <span className='ms-2 text-muted text-decoration-line-through' style={{ fontSize: '0.8em' }}>{formatCurrency(price ?? 0)}</span>
//                                 {/* מחיר מוצר הנחה  */}
//                                 <span className='ms-2 text-muted'>{formatCurrency(salePrice ?? 0)}</span>
//                             </span>
//                         </div>
//                         {onlyToSpecific && (
//                             <>
//                                 <CardTitle className="mt-auto">
//                                     {quantity === 0 ? (
//                                         <Button className="w-100" onClick={() => increaseCartQuantity(id!)}>+ Add To Cart</Button>
//                                     ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
//                                         <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
//                                             <Button onClick={() => decreaseCartQuantity(id!)}>-</Button>
//                                             <div>
//                                                 <span className="fs-3">{quantity}</span> in cart
//                                             </div>
//                                             <Button onClick={() => increaseCartQuantity(id!)}>+</Button>

//                                         </div>
//                                         <Button variant="danger" onClick={() => removeFromCart(id!)}>Remove</Button>
//                                     </div>}

//                                 </CardTitle>
//                                 <p className="mb-2">{shortDesc}</p>
//                                 <span className="text-muted">{longDesc}</span>
//                             </>
//                         )}
//                     </Card.Body>
//                 </Card>
//             </div>
//         </>

//     )
// }
