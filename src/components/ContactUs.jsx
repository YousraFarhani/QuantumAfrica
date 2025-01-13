import React, { useState } from 'react';
import styles from '../style'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the formData is being captured correctly
    console.log('Form Submitted with the following data:', formData);

    if (formData.name && formData.email && formData.message) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div style={{  padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '900px' }}>
      <h1 className='flex-1 font-poppins font-semibold text-white ss:leading-[100.8px]  text-2xl sm:text-3xl md:text-5xl center leading-[75px]'>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', color: 'white' }}
              required
            />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', color: 'white' }}
              required
            />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', height: '100px' }}
              required
            />
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#9762CA',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '18px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
