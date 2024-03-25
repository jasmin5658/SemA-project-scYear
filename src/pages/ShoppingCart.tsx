// import React from 'react'
// import { Offcanvas, Stack } from 'react-bootstrap'
// import { ShoppingCartProps } from '../types/Props'

// export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
//   const { closeCart, cartItems } = useShoppingCart()
//   return (
//     <Offcanvas show={isOpen} onhide={closeCart} placement="end">
//       <Offcanvas.Header closeButton>
//         <Offcanvas.Title>Cart</Offcanvas.Title>
//       </Offcanvas.Header>
//       <Offcanvas.Body>
//       <Stack gap={3}>
//         {cartItems.map(item => (
//           <cartItems key={item.id} {...item} />
//         ))}

//       </Stack>
//       </Offcanvas.Body>
//     </Offcanvas>

//   )
// }
