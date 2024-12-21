import React from 'react';

const SocialMediaSection = () => {
  return (
    <section className="bg-blue-700 py-16 font-poppins">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Gambar Sosial Media */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/contact/sosmed.png"
            alt="Person holding a smartphone with social media icons floating around"
            className="rounded-lg"
            width="600"
            height="400"
          />
        </div>

        {/* Konten Teks */}
        <div className="w-full lg:w-1/2 text-white lg:pl-8">
          <h1 className="text-4xl font-bold mb-4">Stay Connected</h1>
          <p className="text-lg mb-4">
            Follow us on social media to stay updated on new courses, features, and opportunities.
          </p>
          <p className="text-lg mb-4">Follow us on social media</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-youtube-square"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
