import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 font-poppins mt-8">
      {/* Kontainer Utama */}
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Share Your Thoughts with Us!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Have questions, feedback, or ideas? We're here to listen. Fill out the form below, and let's connect!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Your Contact Number"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Company</label>
                <input
                  type="text"
                  placeholder="Your University or Organization"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                placeholder="Type your message here..."
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 flex items-center"
              >
                Send message <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-bold text-blue-900">
            Prefer to reach out directly?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with us via email or phone. We're happy to assist you with any inquiries.
          </p>
          <div className="flex flex-wrap justify-center mt-8 space-x-8">
            <div className="flex items-center space-x-2">
              <i className="fas fa-envelope text-2xl text-blue-900"></i>
              <div>
                <p className="font-semibold text-gray-800">Email:</p>
                <p className="text-gray-600">contact@pintura.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-phone text-2xl text-blue-900"></i>
              <div>
                <p className="font-semibold text-gray-800">Phone:</p>
                <p className="text-gray-600">(414) 687 - 5892</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
