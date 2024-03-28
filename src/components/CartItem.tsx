import Stack from "react-bootstrap/esm/Stack";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItemProps } from "../types/Props";
import { useContext } from "react"; // Import useContext hook
import { ProductsContext } from "../context/ProductsContext"; // Import ProductsContext
import { Product } from "../types/Store"; // Import Product type


export function CartItem({ id, quantity}: CartItemProps) {
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
                        <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                            {quantity}x{item.price}
                        </span>
                    )}
                </div>
            </div>
            <div>₪ {item.price * quantity}</div>
        </Stack>
    );
}
