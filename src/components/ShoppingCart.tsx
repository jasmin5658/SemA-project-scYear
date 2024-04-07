
import { Button, Offcanvas, Stack, Alert } from 'react-bootstrap'; // Import Alert component
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../types/formatCurrency';
import { Product } from '../types/Store';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const { closeCart, cartItems, isOpen, emptyCart } = useShoppingCart();
    const productsContext = useContext(ProductsContext);
    const { products } = productsContext;
    const [persistedProducts, setPersistedProducts] = useState<Product[] | null>(null);
    const navigate = useNavigate();
    const { users } = useContext(UserContext);
    const [showThankYou, setShowThankYou] = useState(false); // State to control the visibility of the thank you message

    useEffect(() => {
        if (!isOpen && cartItems.length === 0) {
            setPersistedProducts([]);
        }
    }, [isOpen, cartItems]);

    const handleCheckout = async () => {
        if (!users.length) {
            alert('Please log in first to proceed with checkout');
            navigate('/login');
            return;
        }

        // Display thank you message
        setShowThankYou(true); // Show the thank you message
        setTimeout(() => setShowThankYou(false), 5000); // Hide the thank you message after 5 seconds

        // Empty the shopping cart
        await emptyCart();
    };

    // Save products to local storage whenever they change
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    // Retrieve products from local storage when the component mounts
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setPersistedProducts(JSON.parse(storedProducts));
        }
    }, []);

    // Function to update current quantity of product
    const updateProductStock = (productId: number, quantity: number) => {
        if (persistedProducts) {
            const updatedProducts = persistedProducts.map((product: Product) => {
                if (product.id === productId) {
                    const currQty = product.currQty || 0;
                    return { ...product, currQty: currQty - quantity };
                }
                return product;
            });
            setPersistedProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
    };

    return (
        <>
            <Offcanvas show={isOpen} onHide={closeCart} placement='end' style={{ backgroundColor: '#E5E0D8r' }} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', color: '#232121', textDecoration: 'underline' }}>Products in your cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CartItem key={item.id} {...item} updateProductStock={updateProductStock} />
                        ))}
                        <div className="ms-auto fw-bold fs-5">
                            Total: {formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const item = products && products.find((product: Product) => product.id === cartItem.id);
                                    return total + (item?.price || 0) * cartItem.quantity;
                                }, 0)
                            )}
                        </div>
                        <Button variant="primary" size="lg" onClick={() => handleCheckout()}>
                            Checkout
                        </Button>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas >
            {/* Thank you message */}
            <Alert show={showThankYou} variant="success" onClose={() => setShowThankYou(false)} dismissible style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: 9999 }}>
                <Alert.Heading>Thank you for your purchase!</Alert.Heading>
                <p>
                    We appreciate your business! Your order has been successfully processed.
                </p>
            </Alert>
        </>
    );
}
