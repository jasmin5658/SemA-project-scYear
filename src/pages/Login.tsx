
import LoginForm from "../components/Form/LoginForm";
import RegistrationForm from "../components/Form/RegistrationForm";
import Navbar from "../components/Navbar";

export default function Login() {
    return (
        <>
        <Navbar />
        <div className="container">
      <h2>Login / Registration</h2>
      <LoginForm />
      <RegistrationForm />
    </div>
    </>
    )
}
