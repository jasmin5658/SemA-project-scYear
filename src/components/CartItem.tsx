import Stack from "react-bootstrap/esm/Stack";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemProps } from "../types/Props";
import { useContext } from "react"; // Import useContext hook
import { ProductsContext } from "../context/ProductsContext"; // Import ProductsContext
import { Product } from "../types/Store"; // Import Product type
import { Button } from "react-bootstrap";
import { formatCurrency } from "../types/formatCurrency";


export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const productsContext = useContext(ProductsContext); // Use useContext hook to access ProductsContext
    const { products } = productsContext; // Destructure products from the context

    // Find the item in products array based on id
    const item = products && products.find((product: Product) => product.id === id);
    if (!item) return null; // If item is not found, return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.imag}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
                alt={item.name} // Add alt attribute for accessibility
            />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 && (
                        <span className="text-muted" style={{
                            fontSize:
                                "0.65rem"
                        }}>
                            X {quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{fontSize:
                "0.75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm"  onClick={() => removeFromCart(id)}>&times;</Button>
            </Stack>
    )
}
