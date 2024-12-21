import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 mt-8 font-poppins">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-4">
          Empowering Students for Future-Ready Careers
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Overcoming literacy challenges, skill gaps, and curriculum misalignment with industry needs
          <br />
          —your journey to career success starts here with PINTURA.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 mb-8">
          Explore Courses <i className="fas fa-arrow-right ml-2"></i>
        </button>
        <div className="w-full flex justify-center">
          <img
            src="/homepage/heroabout.png"
            alt="Group of students working together with laptops in a classroom setting"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
