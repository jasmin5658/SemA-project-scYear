import * as Yup from 'yup'
import { useFormik } from "formik";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


export default function Login() {

  const navigate = useNavigate()
  const { users, setCurrentUser } = useContext<any>(UserContext)

  const loginValidation = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required').email('Invalid email address'),
      password: Yup.string().min(6, 'Password must be 6 characters long').max(20, 'Password must be 20 characters long').required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('values', values);
      if (values.email === 'admin@admin.com' && values.password === '123456789')
        navigate('/admin')
      else {
        let user = users.find((u) => u.email === values.email && u.password === values.password)
        if (user) {
          setCurrentUser(user);
          navigate('/profile')
        }
        else
          navigate('/')
      }

    }
  })


  return (
    <>
      <Navbar />
      <form onSubmit={loginValidation.handleSubmit}>
        <div className="input-holder">
          <label htmlFor="email">Email</label>
          <input type="text" id='email' value={loginValidation.values.email}
            onChange={loginValidation.handleChange} />
        </div>
        <div className="input-holder">
          <label htmlFor="password">Password</label>
          <input type="password" id='password' value={loginValidation.values.password}
            onChange={loginValidation.handleChange} />
        </div>
        <div className="input-holder">
          <button type="submit">Login</button>
        </div>

      </form>
    </>
  )
}