import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Komponen untuk setiap Course Card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/detailcontent', { state: { course } });
  };

  const priceLabel = parseFloat(course.price).toFixed(2) === "0.00" || course.price === null
    ? "Free"
    : "Premium";

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow relative"
    >
      {/* Label Free/Premium */}
      <div
        className={`absolute top-2 left-2 px-4 py-1 rounded text-white ${
          priceLabel === "Free" ? "bg-green-600" : "bg-yellow-600"
        }`}
      >
        {priceLabel}
      </div>

      <img
        src={course.image_url || "https://placehold.co/400x200?text=No+Image"}
        alt={course.title || "No Title"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-700">
          {course.title || "No Title Available"}
        </h2>
        <p className="text-gray-600 mt-2">
          {course.description || "No Description Available"}
        </p>
        <div className="flex items-center mt-2">
          <img
            src={course.image_url || "https://placehold.co/20x20?text=Logo"}
            alt={course.institution || "Institution"}
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700">
            {course.institution || "Unknown Institution"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Komponen utama Courses
const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  useEffect(() => {
    fetch('/api/auth/courses')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging log
        setCategories(data.categories || []); // Pastikan ada data.categories
      })
      .catch((error) => console.error("Error fetching courses:", error)); // Log error jika fetch gagal
  }, []);

  const handleCategoryClick = (category_name) => {
    setActiveCategory(category_name);
    setCurrentPage(1); // Reset ke halaman pertama saat kategori diubah
  };

  const filteredCourses = activeCategory === 'All'
    ? categories
    : categories.filter(course =>
        course.category_name?.toLowerCase() === activeCategory.toLowerCase()
      );

  // Log jika tidak ada course ditemukan
  if (filteredCourses.length === 0) {
    console.log('No courses found for category_name:', activeCategory);
    console.log('Available categories:', categories.map(course => course.category_name));
  }

  const indexOfLastCourses = currentPage * coursesPerPage;
  const indexOfFirstCourses = indexOfLastCourses - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourses, indexOfLastCourses);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredCourses.length / coursesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-8 min-h-screen mb-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {['All', 'Graphic Design','Programming', 'Web Development', 'Database Management', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'Business Management  '].map(category_name => (
            <button
              key={category_name}
              onClick={() => handleCategoryClick(category_name)}
              className={`px-4 py-2 rounded ${
                activeCategory === category_name
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {category_name}
            </button>
          ))}
        </div>
      </div>

      {/* Render Courses */}
      {currentCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No courses available.</div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-600 text-white rounded mr-2 disabled:opacity-50"
        >
          <i className="fas fa-chevron-left"></i> Previous
        </button>
        {[...Array(Math.ceil(filteredCourses.length / coursesPerPage)).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 ${
              page + 1 === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            } border hover:bg-blue-600 hover:text-white rounded`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(filteredCourses.length / coursesPerPage)}
          className="px-4 py-2 bg-blue-600 text-white rounded ml-2 disabled:opacity-50"
        >
          Next <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Courses;