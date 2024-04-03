import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CustomerProfile } from '../types/CustomerProfile';
import { Address } from "../types/Address";

export default function CustomerProfile() {

    const addressSchema = Yup.object().shape({
        street: Yup.string().required('Please enter a street address'),
        city: Yup.string().required('Please enter a city'),
        state: Yup.string().required('Please enter a state or province'),
        postalCode: Yup.string().required('Please enter a postal code'),
        country: Yup.string().required('Please enter a country'),
    });

    const customerProfileSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email address'),
        name: Yup.string().required('Please enter a valid name'),
        phone: Yup.string().required('Please enter a valid phone number'),
        image: Yup.string().required('Please enter a valid image url'),
        birthDate: Yup.date().required('Please enter a valid date'),
        password: Yup.string().required('Please enter a valid password'),
        address: addressSchema.required('Please enter a valid address'),
    });

    const formValidation = useFormik<CustomerProfile>({
        initialValues: {
            email: "",
            Fname: "",
            Lname: "",
            phone: "",
            image: "",
            birthDate: new Date(),
            password: "",
            confirmPassword: "",
            address: {
                city: "",
                street: "",
                homeNumber: 0,
            }
        },
        validationSchema: customerProfileSchema,
        onSubmit: (values) => {
            console.log(values);
            // Handle form submission (potentially sending data to the server)
        },
    });

    return (
        <>
            <Navbar />
            <h1>User Profile</h1>
            <form onSubmit={formValidation.handleSubmit} className="customer-profile-form">
                <div className="input-holder">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text"
                        value={formValidation.values.email}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.email && formValidation.touched.email ? (
                        <p style={{ color: "red" }}>{formValidation.errors.email}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="Fname">Name</label>
                    <input id="Fname" type="text" maxLength={60}
                        value={formValidation.values.Fname}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.Fname && formValidation.touched.Fname ? (
                        <p style={{ color: "red" }}>{formValidation.errors.Fname}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="text"
                        value={formValidation.values.phone}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.phone && formValidation.touched.phone ? (
                        <p style={{ color: "red" }}>{formValidation.errors.phone}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="image">Image</label>
                    <input id="image" type="text"
                        value={formValidation.values.image}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.image && formValidation.touched.image ? (
                        <p style={{ color: "red" }}>{formValidation.errors.image}</p>
                    ) : null}
                </div>
                <input
                    id="birthDate"
                    type="date"
                    value={formValidation.values.birthDate.toISOString().split('T')[0]} // Convert Date to string
                    onChange={formValidation.handleChange}
                    onBlur={formValidation.handleBlur}
                />

                <div className="input-holder">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text"
                        value={formValidation.values.password}
                        onChange={formValidation.handleChange}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.password && formValidation.touched.password ? <p style={{ color: "red" }}>{formValidation.errors.password}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"
                        value={formValidation.values.address.street}
                        onChange={(e) => formValidation.setFieldValue('address.street', e.target.value)}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.address?.street && formValidation.touched.address?.street ? <p style={{ color: "red" }}>{formValidation.errors.address.street}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="city">City</label>
                    <input id="city" type="text"
                        value={formValidation.values.address.city}
                        onChange={(e) => formValidation.setFieldValue('address.city', e.target.value)}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.address?.city && formValidation.touched.address?.city ? <p style={{ color: "red" }}>{formValidation.errors.address.city}</p> : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="homeNumber">Home Number</label>
                    <input id="homeNumber" type="number"
                        value={formValidation.values.address.homeNumber}
                        onChange={(e) => formValidation.setFieldValue('address.homeNumber', e.target.value)}
                        onBlur={formValidation.handleBlur}
                    />
                    {formValidation.errors.address?.homeNumber && formValidation.touched.address?.homeNumber ? <p style={{ color: "red" }}>{formValidation.errors.address.homeNumber}</p> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            <Footer />
        </>
    )
}
