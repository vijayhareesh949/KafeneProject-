import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const login = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage (or your preferred storage method)
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.username === username && userData.password === password) {
      alert('Login successful!');
 
      navigate('/orders');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
   
      <div style={{ maxWidth: '400px', margin: '0 auto' ,backgroundColor: 'Background'}}>
        <h2>Login</h2>
        <form id="loginForm" onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            style={{ width: '100%', marginBottom: '50px' }}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            style={{ width: '100%', marginBottom: '50px' }}
          />
          <br />
          <button
            type="submit"
            style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px' }}
          >
            Login
          </button>
          <h5>Don't have a account? </h5> <Link to='/' ><a style={{fontSize:'20px',marginLeft:'230px',marginTop:'20px'}}>Sign up</a></Link>
        </form>
      </div>
    </>
  );
};

export default LoginForm;


