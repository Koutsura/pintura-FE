import React from 'react'

const Reviews = () => {
  const reviews = [
    {
      name: "Shakira",
      title: "Marketing Analyst",
      image: "/reviews/shakira.png",
      review: "This course helped me understand data analysis from scratch. The real-world applications were invaluable!"
    },
    {
      name: "Axel",
      title: "Data Intern",
      image: "/reviews/axel.png",
      review: "This course provided a great foundation for my career in data analytics. Highly recommend it!"
    },
    {
      name: "Nando",
      title: "Finance Student",
      image: "/reviews/nando.png",
      review: "Excellent course! The instructor explained everything clearly, and the exercises were challenging yet rewarding."
    }
  ];

  function ReviewCard({ review }) {
    return (
      <div className="border border-blue-500 rounded-lg p-6 text-center">
        <img src={review.image} alt={`Profile picture of ${review.name}`} className="w-16 h-16 rounded-full mx-auto mb-4" />
        <p className="text-gray-700 mb-4">"{review.review}"</p>
        <h3 className="text-lg font-bold">{review.name}</h3>
        <p className="text-gray-500">{review.title}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-6">Reviews</h1>
      <div className="flex space-x-4 overflow-x-auto">
        <button className="text-blue-500">
          <i className="fas fa-chevron-left"></i>
        </button>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        <button className="text-blue-500">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Reviews;