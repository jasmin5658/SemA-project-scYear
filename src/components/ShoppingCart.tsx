import { Button, Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../types/formatCurrency';
import { Product } from '../types/Store';
import { useContext, useEffect, useState } from 'react'; // Import useContext hook
import { ProductsContext } from '../context/ProductsContext'; // Import ProductsContext
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


export default function ShoppingCart() {
    const { closeCart, cartItems, isOpen } = useShoppingCart();
    const productsContext = useContext(ProductsContext); // Use useContext hook to access ProductsContext
    const { products } = productsContext; // Destructure products from the context
    const [persistedProducts, setPersistedProducts] = useState<Product[] | null>(null);
    const navigate = useNavigate(); // Access useNavigate

    const { users } = useContext(UserContext); // Access user context


    const handleCheckout = () => {
        const navigate = useNavigate();
        const { users } = useContext(UserContext);

        if (!users.length) {
            navigate('/login'); // Redirect to login if not logged in
        } else {
            // Proceed with checkout logic here (payment integration, order processing, etc.)
            console.log('User is logged in, initiate checkout flow'); // Placeholder for checkout logic
        }
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
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
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
                </Stack>
                    <Button variant="primary" size="lg" onClick={() => navigate('/payment')}>
                        <Button variant="primary" size="lg" onClick={() => handleCheckout()}>

                            Checkout
                        </Button>
                    </Button>
            </Offcanvas.Body>
        </Offcanvas >
        </>
    );
}
