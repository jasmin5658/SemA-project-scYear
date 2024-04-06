import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItemProps } from "../types/Props";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../types/formatCurrency";

export default function StoreItem({ id, name, shortDesc, imag, currQty, price, discount }:
  StoreItemProps) {
  const { getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imag}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline
         mb-4">
          <span className="fs-2" style={{ fontWeight: "bold" }}>{name}</span>
          <span className="ms-2" style={{ fontSize: "16px" }}>{shortDesc}</span>
          <span className="ms-2" style={{ color: "#D2AB80", fontSize: "14px" }}>
            {currQty} in stock</span>
          <span className="ms-2" style={{ fontSize: "15px" }}>{formatCurrency(price)}</span>
          <span className="ms-2 text-muted">{discount}%</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button style={{backgroundColor: "#809671"}} className="w-100" onClick={() => increaseCartQuantity(id)}> + Add to Cart</Button>
          ) : (
            // Existing code for displaying quantity in cart and buttons for increasing/decreasing quantity


            <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
                <Button style={{backgroundColor: "#809671", fontSize: "12px", width: "30px", height: "30px" }} onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in
                  cart
                </div>
                <Button style={{backgroundColor: "#809671",fontSize: "12px", width: "30px",height: "30px" }} onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(id)}
                variant="danger" size="sm"
              >
                Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
