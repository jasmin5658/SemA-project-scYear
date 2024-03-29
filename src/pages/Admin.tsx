import { useContext } from "react";
import { Product } from "../types/Store";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Admin() {
    // const {addProduct} = useContext(ProductsContext)

    const productSchema: Yup.ObjectSchema<Product> = Yup.object({
        id: Yup.number().min(0, 'Id must be geater than 0').required('please enter a valid Id num'),
        name: Yup.string().required('Please enter a valid name'),
        shortDesc: Yup.string().required('Please enter a short description'),
        longDesc: Yup.string(),
        imag: Yup.string().required('please enter a valid image url'),
        minQty: Yup.number().min(0, 'error message').required('Please enter a valid quantity'),
        currQty: Yup.number().min(0, 'error message').required('Please enter a valid quantity'),
        price: Yup.number().min(0, 'price must be geater than 0').required('please enter a valid price'),
        discount: Yup.number().min(0, 'sale price must be geater than 0').max(100, 'sale price must be less than price').required('Please enter a valid sale price'),
    })

    const formValidation = useFormik<Product>({
        initialValues: {
            id: 0,
            name: "",
            shortDesc: "string",
            longDesc: "",
            imag: "",
            minQty: 0,
            currQty: 0,
            price: 0,
            discount: 0,
        },
        validationSchema: productSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <>
            <h1>Admin</h1>
            <form onSubmit={formValidation.handleSubmit}>
                <div className="input-holder">
                    <label htmlFor="id">ID</label>
                    <input id="id" type="number"
                        value={formValidation.values.id}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur} />
                    {formValidation.errors.id && formValidation.touched.id ? <p style={{ color: "red" }}>{formValidation.errors.id}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" maxLength={60}
                        value={formValidation.values.name}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.name && formValidation.touched.name ? <p style={{ color: "red" }}>{formValidation.errors.name}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="shortDesc">Short Description</label>
                    <input id="shortDesc" type="text" maxLength={60}
                        value={formValidation.values.shortDesc}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.shortDesc && formValidation.touched.shortDesc ? <p style={{ color: "red" }}>{formValidation.errors.shortDesc}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="longDesc">Long Description</label>
                    <input id="longDesc" type="text" maxLength={60}
                        value={formValidation.values.longDesc}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.longDesc && formValidation.touched.longDesc ? <p style={{ color: "red" }}>{formValidation.errors.longDesc}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="imag">Image</label>
                    <input id="imag" type="text" maxLength={60}
                        value={formValidation.values.imag}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.imag && formValidation.touched.imag ? <p style={{ color: "red" }}>{formValidation.errors.imag}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="minQty">Min Quantity</label>
                    <input id="minQty" type="number"
                        value={formValidation.values.minQty}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.minQty && formValidation.touched.minQty ? <p style={{ color: "red" }}>{formValidation.errors.minQty}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="currQty">Current Quantity</label>
                    <input id="currQty" type="number"
                        value={formValidation.values.currQty}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.currQty && formValidation.touched.currQty ? <p style={{ color: "red" }}>{formValidation.errors.currQty}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number"
                        value={formValidation.values.price}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.price && formValidation.touched.price ? <p style={{ color: "red" }}>{formValidation.errors.price}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="discount">Discount</label>
                    <input id="discount" type="number"
                        value={formValidation.values.discount}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.discount && formValidation.touched.discount ? <p style={{ color: "red" }}>{formValidation.errors.discount}</p> : null}
                </div>
                <button type="submit">Add</button>
            </form>
        </>
    )
}