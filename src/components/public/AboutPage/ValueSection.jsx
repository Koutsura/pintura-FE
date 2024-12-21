import React from 'react';

const ValueSection = () => {
  return (
    <section className="bg-white py-16 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-blue-700 font-bold text-lg mb-4">Skill-Based Courses</h2>
            <p className="text-gray-700">
              Access hands-on skill courses that go beyond theory—learn coding, data analysis, project management, and more, with formats like interactive videos and project-based tasks.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-blue-700 font-bold text-lg mb-4">Career Support</h2>
            <p className="text-gray-700">
              Prepare for your future with career workshops, resume tips, interview simulations, and mentorship from professionals and alumni.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-blue-700 font-bold text-lg mb-4">Mental Wellness</h2>
            <p className="text-gray-700">
              Get support for managing academic pressure with online counseling sessions, stress-management workshops, and a community of mental health resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
