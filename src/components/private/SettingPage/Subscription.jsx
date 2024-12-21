import React from 'react';
import LayoutWithSidebar from "./LayoutWithSidebar";

const Subscription = () => {
  return (
    <LayoutWithSidebar>
      <div className="flex justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          {/* Header */}
          <div className="flex items-center mb-4">
            <i className="fas fa-dollar-sign text-blue-600 text-2xl mr-2"></i>
            <h1 className="text-blue-600 text-2xl font-bold">Subscriptions</h1>
          </div>
          <p className="text-gray-500 mb-6">
            Manage your subscriptions preferences here and stay updated with the new features.
          </p>

          {/* Current Subscription */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Current Subscription</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-lg font-bold mb-2">Premium Plan</h3>
              <p className="text-gray-600 mb-4">
                Unlimited access to courses, 50 monthly credits, personalized learning recommendations, and priority support.
              </p>
              <div className="mb-2">
                <span className="font-semibold">Plan Type:</span> Monthly
              </div>
              <div className="mb-2">
                <span className="font-semibold">Amount:</span> $2
              </div>
              <div className="mb-4">
                <span className="font-semibold">Active Period:</span> Dec 1, 2024 - Dec 31, 2024
              </div>
            </div>
          </div>

          {/* Subscription History */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Subscription History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Date</th>
                    <th className="py-2 px-4 border-b">Plan</th>
                    <th className="py-2 px-4 border-b">Billing Period</th>
                    <th className="py-2 px-4 border-b">Amount Paid</th>
                    <th className="py-2 px-4 border-b">Payment Method</th>
                    <th className="py-2 px-4 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: 'Dec 1, 2024', plan: 'Premium Plan', period: 'Monthly', amount: '$49', method: 'Credit Card', status: 'Success' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{item.date}</td>
                      <td className="py-2 px-4 border-b">{item.plan}</td>
                      <td className="py-2 px-4 border-b">{item.period}</td>
                      <td className="py-2 px-4 border-b">{item.amount}</td>
                      <td className="py-2 px-4 border-b">{item.method}</td>
                      <td className="py-2 px-4 border-b">{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button className="text-gray-600">&lt; Previous</button>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-lg">1</button>
                <button className="text-gray-600">2</button>
                <button className="text-gray-600">3</button>
                <button className="text-gray-600">4</button>
                <button className="text-gray-600">5</button>
                <span className="text-gray-600">...</span>
                <button className="text-gray-600">Next &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default Subscription;