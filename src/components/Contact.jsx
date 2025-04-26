import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSend = () => {
    if (formData.name && formData.email && formData.message) {
      alert(`Thanks for reaching out, ${formData.name}!`);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-fields">
        <input 
          type="text" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <textarea 
          rows="5" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={(e) => handleChange('message', e.target.value)}
        />
        <button onClick={handleSend} className="btn">Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
