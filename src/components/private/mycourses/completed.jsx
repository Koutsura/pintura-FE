import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const CompletedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem("token"); // Ambil token dari localStorage

      console.log("Token from localStorage:", token);

      if (!token) {
        console.log("Token not found. Redirecting to login...");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          `/api/auth/mycourses/completed`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("API Response:", response);

        if (response.ok) {
          const data = await response.json();
          console.log("Data from API:", data);
          const courseArray = Array.isArray(data.courses) ? data.courses : [];
          setCourses(courseArray);
          setError(null);
        } else {
          const errorData = await response.json();
          console.error("Error from API:", errorData.message);
          throw new Error(errorData.message || "Failed to fetch courses.");
        }
      } catch (err) {
        console.error("Error fetching courses:", err.message);
        setCourses([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // const handleViewCertificate = (course) => {
  //   setSelectedCourse(course);
  //   navigate('/dashboard/mycourses/certificate');
  // };

  const CourseCard = ({ course }) => {
    return (
      <div className="bg-white shadow rounded-lg p-6 flex items-center">
        <img src={course.image_url} alt={course.course_title}                   
        className="h-24 w-32 rounded-lg object-cover" />
        <div className="ml-6 flex-1">
        <div className="text-gray-500 font-semibold">
                    {course.description || "No description available"}
                  </div>
          <h2 className="text-xl font-bold text-blue-600">{course.course_title}</h2>
          <p className="text-gray-500">Completion Date: {course.completion_date}</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">View Details</button>
          <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() =>
            navigate(`/dashboard/mycourses/certificate`, {
              state: { enrollmentId: course.enrollment_id },
            })
          }
        >
          View Certificate
        </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex space-x-4 mb-4">
        <NavLink
          to="/dashboard/mycourses"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          In Progress
        </NavLink>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Completed
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedCourses;
