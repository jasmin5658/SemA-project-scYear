import { useContext } from "react";
import { ProductProps } from "../types/Props";
import { Card, Button } from "react-bootstrap";
import { ProductsContext } from "../context/ProductsContext";

export default function Product({ id, name, shortDesc, imag, currQty, price, discount }: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useContext(ProductsContext);

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
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2" style={{ fontWeight: "bold" }}>{name}</span>
          <span className="ms-2" style={{ fontSize: "16px" }}>{shortDesc}</span>
          <span className="ms-2" style={{ color: "blue", fontSize: "14px" }}> {currQty} in stock</span>
          <span className="ms-2" style={{ fontSize: "15px" }}>{price}₪</span>
          <span className="ms-2 text-muted">{discount}%</span>
        </Card.Title>
        <div className="mt-auto">
          {currQty === 0 || quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}> + Add to Cart</Button>
          ) : (
  // Existing code for displaying quantity in cart and buttons for increasing/decreasing quantity


          <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
            <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem" }}>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
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
