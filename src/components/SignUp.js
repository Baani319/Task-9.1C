// src/components/Signup.js
import React, { useState } from 'react';
import { auth, db } from '../utils/firebase'; // Import Firebase config
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import './SignUp.css'; // Optional: Create a CSS file for styling

function Signup() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        lastName: lastName,
        email: email,
      });

      
      window.location.href = '/login';
    } catch (error) {
      setErrorMessage(error.message); 
      console.error('Signup error:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message if any */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
