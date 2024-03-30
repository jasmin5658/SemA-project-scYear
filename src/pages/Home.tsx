import Navbar from "../components/Navbar";
import "../styles/styles.css";
import Footer from "../components/Footer";



export default function Home() {

  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to my world of art</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
