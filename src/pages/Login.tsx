import React, { useContext, useState } from 'react';
import "../styles/styles.css"
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import UserContext from '../context/UserContext';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Perform validation on formData
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    // Trigger loginClient action
    // Example: loginClient(formData);
  };

  return (
    <>
      <Navbar />
      <section className="text-center text-lg-start">
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="../Images/login.jpg"
                alt="login"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Password
                    </label>
                  </div>

                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" htmlFor="form2Example31">
                          {' '}
                          Remember me{' '}
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <p>Not a member?</p>
                      <Link to="/register"> {/* Navigation to register page */}
                        <button type="button" className="btn btn-primary btn-block mb-4">
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>

                  <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
