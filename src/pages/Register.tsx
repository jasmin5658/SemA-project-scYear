import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { User } from '../types/CustomerProfile';
import "../styles/Forms.css"


export default function Register() {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email address'),
        Fname: Yup.string().required('First name is required'),
        Lname: Yup.string().required('Last name is required'),
        phone: Yup.string().required('Phone number is required').matches(/^\d+$/, 'Invalid phone number'),
        image: Yup.string().optional(), // No validation for image as it's a file
        birthDate: Yup.date().required('Date of birth is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Confirm password is required'),
        address: Yup.object({
            city: Yup.string().required('City is required'),
            street: Yup.string().required('Street is required'),
            homeNumber: Yup.number().required('Home number is required'),
        }),
        deliveryAddress: Yup.object({
            city: Yup.string().required('City is required'),
            street: Yup.string().required('Street is required'),
            homeNumber: Yup.number().required('Home number is required'),
        }),
        UserHistoryPurchases: Yup.array().of(
            Yup.object({
                numOfPurchases: Yup.number().required('Number of purchases is required'),
                productsArray: Yup.object({
                    ProductId: Yup.number().required('Product ID is required'),
                    amountPurcahse: Yup.number().required('Amount of purchase is required'),
                }),
                priceOnDayOfPurchase: Yup.number().required('Price on day of purchase is required'),
                dateOfPurchase: Yup.date().required('Date of purchase is required'),
            })
        ),
        isActive: Yup.boolean().required('Active status is required'),
        isAdmin: Yup.boolean().required('Admin status is required'),
    });

    const formik = useFormik<User>({
        initialValues: {
            email: '',
            Fname: '',
            Lname: '',
            phone: '',
            image: '',
            birthDate: new Date(),
            password: '',
            confirmPassword: '',
            isActive: true,
            address: {
                city: '',
                street: '',
                homeNumber: 0,
            },
            deliveryAddress: {
                city: '',
                street: '',
                homeNumber: 0,
            },
            UserHistoryPurchases: [
                {
                    numOfPurchases: 0,
                    productsArray: {
                        ProductId: 0,
                        amountPurcahse: 0,
                    },
                    priceOnDayOfPurchase: 0,
                    dateOfPurchase: new Date(),
                }
            ]
        },
        validationSchema,
        onSubmit: async (values) => {
            try {

                console.log('Registration successful:', values);

                // Save user data to local storage
                localStorage.setItem('registeredUser', JSON.stringify(values));

                // Mark the user as active
                const user = { ...values, isActive: true };

                // Save the updated user data to local storage
                localStorage.setItem('currentUser', JSON.stringify(user));

                navigate('/profile');
            } catch (error) {
                console.error('Registration failed:', error);
                alert('Registration failed. Please try again.');
            }
        },
    });

    const handleDateChange = (date: Date) => {
        formik.setFieldValue('birthDate', date);
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="input-holder">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.email && formik.errors.email ? 'error' : ''}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <p className='error'>{formik.errors.email}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="Fname">First Name</label>
                    <input
                        type="text"
                        id="Fname"
                        name="Fname"
                        value={formik.values.Fname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.Fname && formik.errors.Fname ? 'error' : ''}
                    />
                    {formik.touched.Fname && formik.errors.Fname ? (
                        <p className='error'>{formik.errors.Fname}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="Lname">Last Name</label>
                    <input
                        type="text"
                        id="Lname"
                        name="Lname"
                        value={formik.values.Lname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.Lname && formik.errors.Lname ? 'error' : ''}
                    />
                    {formik.touched.Lname && formik.errors.Lname ? (
                        <p className='error'>{formik.errors.Lname}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.phone && formik.errors.phone ? 'error' : ''}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <p className='error'>{formik.errors.phone}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.image && formik.errors.image ? 'error' : ''}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <p className='error'>{formik.errors.image}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="birthDate">Date of Birth</label>
                    <DatePicker
                        id="birthDate"
                        name="birthDate"
                        selected={formik.values.birthDate}
                        onChange={handleDateChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.birthDate && formik.errors.birthDate ? 'error' : ''}
                    />
                    {formik.touched.birthDate && formik.errors.birthDate ? (
                        <p className='error'>{formik.errors.birthDate as string}</p>
                    ) : null}
                </div>

                <div className="input-holder">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.password && formik.errors.password ? 'error' : ''}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <p className='error'>{formik.errors.password}</p>
                    ) : null}
                </div>
                <div className="input-holder">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error' : ''}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <p className='error'>{formik.errors.confirmPassword}</p>
                    ) : null}
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    );
}

