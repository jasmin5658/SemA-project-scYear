import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css';
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        // Perform registration action
    };

    return (
        <>
            <Navbar />
            <div className="register-form-container">
                <div className="card-body py-5 px-md-5">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form3Example1"
                                        className="form-control"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example1">
                                        First name
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        id="form3Example2"
                                        className="form-control"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="form3Example2">
                                        Last name
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="form3Example3"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example3">
                                Email address
                            </label>
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="form3Example4"
                                className="form-control"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example4">
                                Password
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleRegister}>
                            Sign up
                        </button>
                        <div className="text-center">
                        </div>
                    </form>
                </div>
                <img src="../Images/login.jpg" className="register-image" alt="" />
            </div>
        </>
    );
};

export default Register;
