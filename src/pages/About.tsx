import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/about.css";
export default function About() {
  return (
    <>
      <Navbar />
        <div className="about-content">
          <h2 className="about-title">About me</h2>
          <p className="about-caption">
            I started drawing at the age of 10 and have been drawing ever since.<br></br>
            the love for art and drawing came from my grandma.<br></br>
            I was always curious about how things worked and how things looked.<br></br>
            and this love for art and drawing has
            started to grow.<br></br>
            and i started drawing for my friends and family.<br></br>
            and now i am drawing for you!<br></br>
            hope you like it!
          </p>
        </div>
      <Footer />
    </>
  )
}
