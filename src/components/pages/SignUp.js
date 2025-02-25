import React from 'react';
import '../../App.css';
import ContactForm from './form.js';

export default function SignUp() {
  return (
    <div
      style={{
        backgroundImage: "url('images/Forests.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensure the background covers the full height of the page
      }}
    >
      <ContactForm />
    </div>
  );
}
