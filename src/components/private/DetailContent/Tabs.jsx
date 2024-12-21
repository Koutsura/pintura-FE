import React, { useState } from 'react';
import Overview from '../DetailContent/Overview';
import Modules from '../DetailContent/Modules';
import Instructor from '../DetailContent/Instructor';
import DetailSkills from '../DetailContent/DetailSkills';
import Reviews from '../DetailContent/Reviews';
import SimilarCourses from '../DetailContent/SimilarCourses';

import FAQs from '../DetailContent/Faqs';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Default tab is 'overview'

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'modules':
        return <Modules />;
      case 'instructor':
        return <Instructor />;
      case 'DetailSkills':
        return <DetailSkills />;
      case 'reviews':
        return <Reviews />;
      case 'similar-courses':
        return <SimilarCourses />;
      case 'faqs':
        return <FAQs />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <div className="bg-gray-100 border-t border-b border-gray-300">
        <nav className="flex justify-center space-x-4 p-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 ${activeTab === 'overview' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2 ${activeTab === 'modules' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            Modules
          </button>
          <button 
            onClick={() => setActiveTab('instructor')}
            className={`px-4 py-2 ${activeTab === 'instructor' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            Instructor
          </button>
          <button 
            onClick={() => setActiveTab('DetailSkills')}
            className={`px-4 py-2 ${activeTab === 'DetailSkills' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            DetailSkills
          </button>
          <button 
            onClick={() => setActiveTab('similar-courses')}
            className={`px-4 py-2 ${activeTab === 'similar-courses' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            Similar Courses
          </button>
          <button 
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-2 ${activeTab === 'faqs' ? 'bg-blue-700 text-white' : 'text-gray-500'}`}
          >
            FAQs
          </button>
        </nav>
      </div>

      {/* Render content based on active tab */}
      <div className="p-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tabs;