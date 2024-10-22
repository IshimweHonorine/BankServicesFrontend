// ... other imports remain unchanged
import React, { useState, useEffect } from 'react';
import ChatComponent from './ChatComponent';
import Navbar from './Navigation/Navbar';
import './App.css';

function Home() {
  const [currentTicket, setCurrentTicket] = useState('C-0007');
  const [nextTicket, setNextTicket] = useState('C-0008');

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
      <section className="hero-section py-10">
        <h2 className="text-4xl font-bold text-center mb-4">Welcome to Your Bank</h2>
        <p className="text-lg text-center mb-8">We are committed to providing accessible banking services for everyone, including our valued clients who are deaf.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {/* Video Tutorial Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Video Tutorial</h5>
            <p className="mb-4">Explore our banking services through this informative video, complete with captions and sign language interpretation.</p>
            <video controls className="w-full">
              <source src="/my_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Audio Tutorial Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Audio Tutorial</h5>
            <p className="mb-4">Listen to our audio tutorial for a quick overview of our services, featuring captions and sign language interpretation.</p>
            <audio controls className="w-full">
              <source src="/my_audio.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Welcome Text Card */}
          <div className="card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h5 className="text-xl font-semibold mb-4">Our Commitment</h5>
            <p className="mb-4">At our bank, we strive to provide the best services tailored to your needs. Our goal is to make banking accessible for everyone.</p>
            <p>Join us and experience banking that understands your needs!</p>
          </div>
        </div>
      </section>

      {/* Remaining sections like queue display, chat, etc. */}
      {/* You can remove or update the sections you want here */}

      {/* Footer */}
      <footer className="footer">
        <p>Contact us at support@bankforall.com | Accessibility Information</p>
      </footer>
    </div>
  );
}

export default Home;
