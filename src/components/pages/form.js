import React, { useState } from 'react';
import '../../App.css';
import './form.css';
import axios from 'axios';

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () =>{
    const data = {
      name: name,
      email:email,
      password: password
    }
    axios.post("https://travel-node-wzql.onrender.com/users/register", data).then(() =>{
      alert("Form submitted hooray!!");
    })
  }
  return (
    <form className='contact-form'>
      <h2 className='contact-header'>Contact Us</h2>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor='email'>Email:</label>
      <input type='email' id='email'  value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor='password'>Password:</label>
      <textarea id='password'  value={password} onChange={e => setPassword(e.target.value)} />  

      <button type='submit' onClick={handleSubmit}>Submit</button>

    </form>
  );
}