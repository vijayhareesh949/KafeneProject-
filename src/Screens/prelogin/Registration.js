import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { username: 'user1', password: 'password1', email: 'emailid' },
    { username: 'user2', password: 'password2', email: 'emailid' },
  ]);

  const register = (e) => {
    e.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('registeremail').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }

    if (!email.includes('@') || !email.includes('.com')) {
      alert('Invalid email format');
      return false;
    }


    // Store user data in localStorage (or your preferred storage method)
    const newUser = { username, password, email };
    localStorage.setItem('userData', JSON.stringify(newUser));
    setUsers([...users, newUser]);

    alert('Registration successful! Now you can log in.');
    navigate('/login'); // Navigate to the login page

    return true;
  };



  return (
    <>
   
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <marquee>
      <h2 >Registeration</h2></marquee>
      <form id="registerform" onSubmit={register}>
        <input
          type="text"
          id="registerUsername"
          placeholder="Username" 
          required
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <br />
        <input
          type="password"
          id="registerPassword"
          placeholder="Password"
          required
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <br />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          required
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <br />
        <input 
          type="email"
          id="registeremail"
          placeholder="Email"
          required
          style={{ width: '100%', marginBottom: '50px' }}
        />
        <br />
        <button
          type="submit"
          style={{ width: '100%', backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px' }}
        >
          Register
        </button>
        <h5>Already have a an account</h5><Link to='/Login'><a style={{fontSize:'20px',marginLeft:'230px',marginTop:'20px'}}>Login</a></Link >
    

      </form>
    </div>
    </>
  );
};

export default RegistrationForm;
