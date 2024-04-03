import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPhoneAlt, FaHome } from 'react-icons/fa';
import "../styles/footer.css";
import { IoIosMail } from 'react-icons/io';

export default function Footer() {
    return (
        <footer className='footer'>
            <section className='social-links'>
                <div className='container'>
                    <div className='col-12'>
                        <span>Get connected with me on social networks: </span>
                        <a href='https://www.facebook.com' className='social-icon'>
                            <FaFacebookSquare />
                        </a>
                        <a href='https://twitter.com' className='social-icon'>
                            <FaTwitterSquare />
                        </a>
                        <a href='https://www.instagram.com' className='social-icon'>
                            <FaInstagramSquare />
                        </a>
                    </div>
                </div>
            </section>
            <section className='footer-links'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-lg-4 col-xl-3'>
                            <h6 className='fw-bold mb-4'></h6>
                            <Link to='/'>
                                <img
                                    src='/Images/logoNew.jpg'
                                    alt='Logo'
                                    className='logo'
                                />
                            </Link>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2'>
                            <h6 className='fw-bold mb-4'>Products</h6>
                            <p><a href='#!'>Watercolor paintings</a></p>
                            <p><a href='#!'>Oil Paintings</a></p>
                            <p><a href='#!'>Custom drawings</a></p>
                        </div>
                        <div className='col-md-3 col-lg-2 col-xl-2'>
                            <h6 className='fw-bold mb-4'>Links</h6>
                            <p><a href='/'>Home</a></p>
                            <p><a href='#!'>Orders</a></p>
                            <p><a href='#!'>About</a></p>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xl-3'>
                            <h6 className='fw-bold mb-4'>Contact</h6>
                            <p><FaHome />
                                Israel, Jerusalem, Nachlaot</p>
                            <p><IoIosMail />
                                AdamsArt21@gmail.com</p>
                            <p><FaPhoneAlt />
                                + 972 52-8255671</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='copyright'>
                © 2024 This website is created by Jamin
                <a href='https://Github.com/' className='fw-bold'></a>
            </div>
        </footer>
    );
}
