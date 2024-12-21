import Navbar from "../../../components/private/shared/Navbar";
import Footer from "../../../components/public/shared/Footer";

import React from "react";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center  min-h-screen bg-gray-50 px-4 py-8 md:px-8">
        <img 
          src="/community/community.png" 
          alt="Illustration of a person holding a tablet with various icons around" 
          className="max-w-xs md:max-w-sm lg:max-w-md mb-8"
        />
        <p className="text-gray-600 text-center text-lg md:text-xl font-medium">
          Our Community Page is under development. Stay tuned!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;
