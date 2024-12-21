import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from '/logo/logo.png';

const Learningafterquiz = () => {
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false)); 
  const [selectedModule, setSelectedModule] = useState(null); 
  const navigate = useNavigate(); 

  const toggleModule = (index) => {
    const updatedModuleStatus = [...isModuleOpen];
    updatedModuleStatus[index] = !updatedModuleStatus[index];
    setIsModuleOpen(updatedModuleStatus);

    if (selectedModule === index) {
      setSelectedModule(null);
    } else {
      setSelectedModule(index);
    }
  };

  const handleStartClick = () => {
    navigate('/dashboard/mycourses/learningquiz');
  };

  const handleViewDetailClick = () => {
    navigate('/dashboard/mycourses/learningviewdetail');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex flex-1">
        <section className="flex-1 p-8 bg-white shadow">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Rules</h1>
            <p className="mt-4 text-gray-700">This quiz aims to test your knowledge of the material Introduction to Data Analysis.</p>
            <p className="mt-2 text-gray-700">There are 5 questions that must be completed in this quiz. Some of the conditions are as follows:</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Passing score requirement: 80%</li>
              <li>Exam duration: 5 minutes</li>
            </ul>
            <p className="mt-2 text-gray-700">If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?</p>
            <p className="mt-2 text-gray-700">Good luck with your work!</p>
          </div>

          {/* Tombol Start berada di tengah antara Rules dan Result */}
          <div className="flex justify-end mb-8">
            <button onClick={handleStartClick} className="bg-blue-700 text-white px-4 py-2 rounded">Start</button>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-blue-700">Result</h2>
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left">Date</th>
                  <th className="border p-2 text-left">Percentage</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">21/11/24</td>
                  <td className="border p-2">80%</td>
                  <td className="border p-2">Passed</td>
                  <td className="border p-2 text-blue-500">
                    <button onClick={handleViewDetailClick}>View Detail</button>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                </tr>
                <tr>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                  <td className="border p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learningafterquiz;