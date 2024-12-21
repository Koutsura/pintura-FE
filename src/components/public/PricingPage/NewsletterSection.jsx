import React, { useState } from 'react';

const NewsletterSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false); // Pop-up akan menghilang setelah 3 detik
    }, 3000);
  };

  return (
    <section className="bg-blue-700 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Heading dan Penjelasan */}
        <div className="flex items-center space-x-4 text-white">
          <i className="fas fa-envelope text-3xl"></i>
          <p className="text-lg font-medium max-w-lg">
            Stay updated with <span className="font-bold">PINTURA</span>! Subscribe to receive exclusive tips, career insights, and the latest updates straight to your inbox.
          </p>
        </div>

        {/* Form Newsletter */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="py-3 px-4 rounded-l-md w-full sm:w-72 border-none focus:outline-none text-gray-700"
          />
          <button
            onClick={handleSubscribe}
            className="bg-white text-blue-700 py-3 px-6 rounded-r-md font-medium hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Pop-up Subscribe Berhasil */}
      {isSubscribed && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-700 px-8 py-4 rounded-md shadow-lg">
          <p className="text-lg font-medium">Thank you for subscribing!</p>
        </div>
      )}
    </section>
  );
};

export default NewsletterSection;
