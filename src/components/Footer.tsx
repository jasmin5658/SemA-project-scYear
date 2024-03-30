import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with me on social networks:</span>
                    </div>

                    <div>
                        <a href='https://www.facebook.com' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon="facebook" />
                        </a>
                        <a href='https://twitter.com' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='twitter' />
                        </a>
                        <a href='https://www.instagram.com' className='me-4 text-reset'>
                            <MDBIcon color='secondary' fab icon='instagram' />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />

                                </h6>
                                <Link to="/">
                                    <img
                                        src="/Images/logoNew.jpg"
                                        alt="Logo"
                                        style={{
                                            maxHeight: "5rem",
                                            marginRight: "1rem",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Link>                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    watercolor paintings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Oil Paintings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Custom drawings
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                                <p>
                                    <a href='/' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    Israel, Jerusalem, Nachlaot
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    AdamsArt21@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 972 52-8255671
                                </p>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 This website is created by Jamin
                    <a className='text-reset fw-bold' href='https://Github.com/'>
                    </a>
                </div>
            </MDBFooter >
        </>
    )
}