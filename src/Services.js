import React from 'react';
import Navbar from './Navigation/Navbar';
import './App.css';

function Services() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Video, Audio, and Explanation in Cards */}
      <section className="hero-section bg-gray-100 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Accessible Banking Services</h1>
        <p className="text-lg text-center mb-8">We offer inclusive and accessible banking services for everyone, including the deaf community.</p>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl ">
          {/* Video Explanation Card */}
          <div className="hero-card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Video Explanation</h2>
            <video controls className="w-full mb-4 rounded-lg">
              <source src="my_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700">
              This video provides a visual overview of our accessible banking services. It includes information on how deaf and hard-of-hearing customers can easily access our services using our inclusive platforms.
            </p>
          </div>

          {/* Audio Explanation Card */}
          <div className="hero-card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Audio Explanation</h2>
            <audio controls className="w-full mb-4 rounded-lg">
              <source src="my_audio.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-gray-700">
              Listen to the audio version of our service explanation. It covers how our banking services cater to all customers, including those with hearing impairments, with features designed for accessibility.
            </p>
          </div>

          {/* Written Explanation Card */}
          <div className="hero-card bg-white p-6 rounded-lg shadow-lg hover:bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Written Explanation</h2>
            <p className="text-gray-700">
              We ensure that our banking services are accessible to everyone. Through our inclusive platforms, deaf and hard-of-hearing clients can navigate easily, using accessible ATMs, mobile apps, and online banking systems. Our services are designed to ensure no one is left behind.
            </p>
            <p className="text-gray-700">
              We also provide dedicated customer support through multiple communication channels, including video calls, chat, and email, to assist users from all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section bg-gray-100 py-10 min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl ">
          {/* Withdraw Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Withdraw Money</h3>
            <p className="text-gray-700 mb-4">
              Effortlessly withdraw funds from your account through our accessible ATMs or online platform. Our services ensure that even deaf clients can navigate with ease.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Deposit Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Deposit Money</h3>
            <p className="text-gray-700 mb-4">
              Quickly deposit money to your account using a variety of methods, including online transfers, mobile deposits, and more, all designed to be user-friendly and accessible.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Loan Service */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Apply for a Loan</h3>
            <p className="text-gray-700 mb-4">
              Whether you need a personal loan, business loan, or mortgage, our loan services come with accessible guidance and flexible repayment options.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Account Overview */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Account Overview</h3>
            <p className="text-gray-700 mb-4">
              Easily access your account balance, transaction history, and other details through our accessible banking app, designed to cater to all users.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* Money Transfers */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Money Transfers</h3>
            <p className="text-gray-700 mb-4">
              Send and receive money securely and quickly. Our service ensures hassle-free international and domestic transfers with full accessibility features.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>

          {/* 24/7 Customer Support */}
          <div className="service-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">24/7 Customer Support</h3>
            <p className="text-gray-700 mb-4">
              Get in touch with our dedicated customer support team any time of the day via video call, live chat, or text, ensuring everyone gets the help they need.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-6 bg-gray-800 text-white text-center">
        <p>Contact us at support@bankforall.com | Accessibility Information</p>
      </footer>
    </div>
  );
}

export default Services;
