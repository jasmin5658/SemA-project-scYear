import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const foundUser = user.find(u => u.email === email && u.password === password);
    if (foundUser) {
      // Log in successful, perform necessary actions (e.g., redirect)
      console.log('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

  const validateForm = () => {
    return email.trim() !== '' && password.trim() !== '';
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={!validateForm()}>Login</button>
      </form>
    </div>
  );
};

export default Login;

