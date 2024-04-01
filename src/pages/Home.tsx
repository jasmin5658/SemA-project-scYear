import Navbar from "../components/Navbar";
import "../styles/home.css";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";



export default function Home() {

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to my world of art</h1>
          <div className="hero-btn">
          <Link to ="/store">To the store</Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
