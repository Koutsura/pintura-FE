import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Menggunakan useNavigate untuk redirect
  const course = location.state?.course;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleEnroll = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to enroll.");
      return;
    }

    if (course.price > 0) {

      const shouldRedirect2 = window.confirm(
        `This is a paid course. Would you like to go to Pricing page?`
      );
      if (shouldRedirect2) {
        navigate("/pricing");
      }
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const response = await fetch(`/api/auth/enroll/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          course_id: course.course_id,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("Enrollment successful!");
      } else if (result.message === "You are already enrolled in this course") {
        // Tampilkan dialog konfirmasi
        const shouldRedirect = window.confirm(
          `${result.message}. Would you like to go to My Courses?`
        );
        if (shouldRedirect) {
          navigate("/dashboard/mycourses"); // Redirect ke My Courses
        }
      } else {
        setError(result.message || "Failed to enroll");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const StarRating = ({ rating = 0, totalReviews = 0 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-500 mr-2">
          {Array.from({ length: fullStars }).map((_, index) => (
            <i key={`full-${index}`} className="fas fa-star"></i>
          ))}
          {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
          {Array.from({ length: emptyStars }).map((_, index) => (
            <i key={`empty-${index}`} className="far fa-star"></i>
          ))}
        </div>
        <p className="text-gray-600">({rating}/5)</p>
      </div>
    );
  };

  if (!course) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-gray-700">
          No course selected
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100">
      <div className="md:w-1/2 p-4">
        <img
          src={course.image_url}
          alt={course.title}
          className="rounded-lg shadow-lg w-auto"
        />
      </div>
      <div className="md:w-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src={course.image_url}
              alt="University logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            <h2 className="text-gray-700 text-lg font-semibold">
              {course.institution}
            </h2>
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <StarRating rating={course.rating} totalReviews={course.total_reviews} />
          <div className="flex items-center">
            <button
              onClick={handleEnroll}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4"
              disabled={loading}
            >
              {loading ? "Enrolling..." : "Enroll Now"}
            </button>
            {course.price > 0 && (
              <p className="text-gray-600">Course Price: ${course.price}</p>
            )}
          </div>
        </div>
        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
        {successMessage && (
          <div className="mt-4 text-green-600">
            <p>{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;