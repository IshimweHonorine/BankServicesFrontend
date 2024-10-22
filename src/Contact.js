import React, { useState, useEffect } from 'react';
import ChatComponent from './ChatComponent';
import Navbar from './Navigation/Navbar';
import './App.css';

function Contact() {
  const [currentTicket, setCurrentTicket] = useState('C-0007');
  const [nextTicket, setNextTicket] = useState('C-0008');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Simulate queue update every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTicketNumber = parseInt(currentTicket.split('-')[1]);
      const nextTicketNumber = parseInt(nextTicket.split('-')[1]);

      setCurrentTicket(`C-${(currentTicketNumber + 1).toString().padStart(4, '0')}`);
      setNextTicket(`C-${(nextTicketNumber + 1).toString().padStart(4, '0')}`);
    }, 10000); // Updates every 10 seconds

    return () => clearInterval(interval);
  }, [currentTicket, nextTicket]);

  return (
    <div className="App">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section text-center py-10 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">We are here to assist you with our accessible banking services.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {/* Video Tutorial Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Video Tutorial</h5>
            <p className="mb-4">Explore our video tutorial with captions and sign language interpretation for a better understanding of our services.</p>
            <video controls className="w-full">
              <source src="/my_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Audio Tutorial Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Audio Tutorial</h5>
            <p className="mb-4">Listen to our audio tutorial, featuring captions and sign language interpretation, for an inclusive experience.</p>
            <audio controls className="w-full">
              <source src="/my_audio.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Captions Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Services Captions</h5>
            <p className="underline mb-2">Discover Our Services</p>
            <p>We provide detailed descriptions and guidance in our tutorials to help you navigate our banking services effectively.</p>
          </div>
        </div>
      </section>

      {/* Query Form Section */}
      <section className="query-form-section my-10 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Submit a Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold mb-2">Your Query</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Type your query here..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer py-4 bg-gray-800 text-center text-white">
        <p>Contact us at support@bankforall.com | Accessibility Information</p>
      </footer>
    </div>
  );
}

export default Contact;
