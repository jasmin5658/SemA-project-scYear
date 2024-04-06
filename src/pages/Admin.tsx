import { useState, useContext, useEffect } from 'react';
import ReactModal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "../styles/admin.css";
import { ProductsContext } from '../context/ProductsContext'; // Import the context value directly
import  Navbar  from "../components/Navbar";
export default function Admin() {
    const [products, setProducts] = useState([]);

    const { addProduct } = useContext(ProductsContext);

    const [showPopup, setShowPopup] = useState(false);

    const productSchema = Yup.object({
        id: Yup.number().min(0, 'ID must be greater than 0').required('Please enter a valid ID number'),
        name: Yup.string().required('Please enter a valid name'),
        category: Yup.string().required('Please enter a  valid category'),
        longDesc: Yup.string(),
        imag: Yup.string().required('Please enter a valid image URL'),
        minQty: Yup.number().min(0, 'Min quantity must be greater than or equal to 0').required('Please enter a valid quantity'),
        currQty: Yup.number().min(0, 'Current quantity must be greater than or equal to 0').required('Please enter a valid quantity'),
        price: Yup.number().min(0, 'Price must be greater than 0').required('Please enter a valid price'),
        discount: Yup.number().min(0, 'Discount must be greater than or equal to 0').max(100, 'Discount must be less than or equal to 100').required('Please enter a valid discount'),
    });


    const formValidation = useFormik({
        initialValues: {
            id: 0,
            name: "",
            category: "",
            longDesc: "",
            imag: "",
            minQty: 0,
            currQty: 0,
            price: 0,
            discount: 0,
        },
        validationSchema: productSchema,
        onSubmit: (values) => {
            addProduct(values);
            setShowPopup(true);
            localStorage.setItem('products', JSON.stringify([...products, values]));
            console.log('values', values);
        },
    });

    return (
        <>
        <Navbar/>
        <div className="admin-form">
         <div className="admin-container">
            <h1> Hi Admin</h1>
            <form onSubmit={formValidation.handleSubmit}>
                <div className="input-holder">
                    <label htmlFor="id">ID</label>
                    <input
                        id="id"
                        type="number"
                        value={formValidation.values.id}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.id && formValidation.touched.id ? (
                        <p className='error'>{formValidation.errors.id}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text" maxLength={60}
                        value={formValidation.values.name}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.name && formValidation.touched.name ? (
                        <p className='error'>{formValidation.errors.name}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="category">Category</label>
                    <input
                        id="category"
                        type="text"
                        value={formValidation.values.category}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.category && formValidation.touched.category ? (
                        <p className='error'>{formValidation.errors.category}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="longDesc">Long Description</label>
                    <input
                        id="longDesc"
                        type="text"
                        value={formValidation.values.longDesc}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.longDesc && formValidation.touched.longDesc ? (
                        <p className='error'>{formValidation.errors.longDesc}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="imag">Image</label>
                    <input

                        id="imag"
                        type="text"
                        value={formValidation.values.imag}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.imag && formValidation.touched.imag ? (

<p className='error'>{formValidation.errors.imag}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="minQty">Min Quantity</label>
                    <input

                        id="minQty"
                        type="number"
                        value={formValidation.values.minQty}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.minQty && formValidation.touched.minQty ? (
                        <p className='error'>{formValidation.errors.minQty}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="currQty">Current Quantity</label>
                    <input

                        id="currQty"
                        type="number"
                        value={formValidation.values.currQty}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.currQty && formValidation.touched.currQty ? (

<p className='error'>{formValidation.errors.currQty}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="price">Price</label>
                    <input

                        id="price"
                        type="number"
                        value={formValidation.values.price}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.price && formValidation.touched.price ? (

                        <p className='error'>{formValidation.errors.price}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="discount">Discount</label>
                    <input id="discount" type="number"
                        value={formValidation.values.discount}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.discount && formValidation.touched.discount ? (
                        <p className='error'>{formValidation.errors.discount}</p>
                    ) : null}
                </div>
                <button type="submit" className="add-button">Add Product</button>
            </form>
            </div>
            {/* Popup Modal */}
            <ReactModal
                isOpen={showPopup}
                onRequestClose={() => setShowPopup(false)}
                className="popup-modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent black overlay
                    },
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#fff',
                        padding: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '5px', // Rounded corners
                    },
                }}
            >
                <div className="popup-content">
                    <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>
                        Your product has been added successfully!

                    </p>
                    <Link to="/store">Go to Store</Link> {/* Link to navigate to the store page */}
                </div>
            </ReactModal >
            </div>
            <Footer />
        </>
    );
}
