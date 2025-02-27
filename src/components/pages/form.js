import React, { useState } from 'react';
import '../../App.css';
import './form.css';
import axios from 'axios';

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password
    };
  
    axios.post("http://localhost:4000/api/users/register", data)
      .then(() => {
        alert("We will contact you shortly.");
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          alert("User already exists!");
        } else {
          alert("Something went wrong. Please try again.");
        }
      });
  };
  
  return (
    <form className='contact-form'>
      <h2 className='contact-header'>Contact Us</h2>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email'  value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor='password'>Message: </label>
      <textarea id='password'  value={password} onChange={e => setPassword(e.target.value)} />  

      <button type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>

    </form>
  );
}