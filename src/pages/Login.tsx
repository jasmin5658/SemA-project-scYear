import * as Yup from 'yup';
import { useFormik } from "formik";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CustomerProfile } from '../types/CustomerProfile';
import "../styles/login.css";
import Footer from '../components/Footer';
import React from 'react';

export default function Login() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useContext<any>(UserContext);
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const loginValidation = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{6,}$/,
          'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 6 characters long'
        ),
    }),
    onSubmit: (values) => {
      console.log('values', values);

      // Admin check
      if (values.email === 'admin@admin.com' && values.password === 'Admin123!') {
        navigate('/admin');
        return;
      }

      // User check
      if (values.email === 'user@user.com' && values.password === 'User123!') {
        navigate('/profile');
        return;
      }
      {
        // Display appropriate message if user does not exist with these credentials
        setErrorMessage('No user found with these credentials. Please check your email and password.');
      }
    }
  });

  return (
    <>
      <Navbar />
      <div className='login-container'>
        <div className="login-form">
          <form onSubmit={loginValidation.handleSubmit}>
            <div className="input-holder">
              <label htmlFor="email">Email</label>
              <input type="text" id='email' value={loginValidation.values.email} onChange={loginValidation.handleChange} />
              {loginValidation.errors.email && loginValidation.touched.email && (
                <p className='error'>{loginValidation.errors.email}</p>
              )}
            </div>
            <div className="input-holder">
              <label htmlFor="password">Password</label>
              <input type="password" id='password' value={loginValidation.values.password} onChange={loginValidation.handleChange} />
              {loginValidation.errors.password && loginValidation.touched.password && (
                <p className='error'>{loginValidation.errors.password}</p>
              )}
            </div>
            <div className="input-holder">
              <button type="submit">Login</button>
            </div>
            <div className="input-holder">
              <a href="/register" className="register-link">Don't have an account?</a>
            </div>
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
