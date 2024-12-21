import React from 'react';

const FeaturedSection = () => {
  return (
    <section className="bg-white py-16 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Designed for Your Success
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <i className="fas fa-video text-blue-700 text-3xl mr-4"></i>
              <div>
                <h2 className="text-lg font-bold text-blue-800">Diverse Content Formats</h2>
                <p className="text-gray-600 mt-2">
                  Engage with videos learning, quizzes, and exams to deepen your learning.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <i className="fas fa-bell text-blue-700 text-3xl mr-4"></i>
              <div>
                <h2 className="text-lg font-bold text-blue-800">Notifications & Reminders</h2>
                <p className="text-gray-600 mt-2">
                  Stay on track with reminders to complete modules and updates on courses you’re enrolled in.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <i className="fas fa-comments text-blue-700 text-3xl mr-4"></i>
              <div>
                <h2 className="text-lg font-bold text-blue-800">Feedback Mechanism</h2>
                <p className="text-gray-600 mt-2">
                  Share your thoughts and suggestions to improve the platform and content quality.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <i className="fas fa-trophy text-blue-700 text-3xl mr-4"></i>
              <div>
                <h2 className="text-lg font-bold text-blue-800">Gamification</h2>
                <p className="text-gray-600 mt-2">
                  Stay motivated with badges and point progress that keep you engaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
