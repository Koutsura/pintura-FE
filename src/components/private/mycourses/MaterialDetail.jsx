import React from 'react';

const MaterialDetail = ({ material }) => {
  const { type, content } = material;

  // Fungsi untuk menampilkan video YouTube
  const renderVideo = (url) => {
    const videoId = url.split('v=')[1].split('&')[0]; // Mendapatkan video ID dari URL YouTube
    return (
      <div className="aspect-w-16 aspect-h-9">
        <iframe
        width="100%"
        height="300%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  // Fungsi untuk menampilkan PDF
  const renderPDF = (content) => {
    // Mengambil ID file dari URL Google Drive
    const fileId = content.split('/d/')[1].split('/')[0];
    const driveFileUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  
    return (
      <div className="flex justify-center items-center w-full">
        <iframe
          src={driveFileUrl}
          width="100%"
          height="600"
          title="Google Drive PDF Viewer"
          frameBorder="0"
        ></iframe>
      </div>
    );
  };
  
  // Fungsi untuk menampilkan quiz (sederhana contoh)
  const renderQuiz = (content) => {
    return <div>{content}</div>;
  };

  // Fungsi untuk menampilkan text
  const renderText = (content) => {
    return <div>{content}</div>;
  };
  const handleCommentClick = () => {
    navigate("/dashboard/mycourses/learningsectioncoment");
  };
  
  return (
<main className="flex flex-1 p-4 gap-5">
<div className="flex flex-col w-full bg-white p-4 rounded-lg shadow mb-4 gap-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">{material.title}</h2>

      {/* Render berdasarkan jenis materi */}
      {type === 'pdf' && renderPDF(content)}
      {type === 'video' && renderVideo(content)}
      {type === 'quiz' && renderQuiz(content)}
      {type === 'text' && renderText(content)}
    {/* Comment Section - keep this at the bottom */}
    <div className="flex justify-between items-center mt-auto">
      <div className="flex items-center space-x-2">
        <i className="fas fa-comment" onClick={handleCommentClick}></i>
        <span>Comment 27</span>
      </div>
      <div className="flex items-center space-x-2">
        <i className="fas fa-download"></i>
        <span>Downloads 7</span>
      </div>
    </div>
    </div>

                  {/* Sidebar: Course Overview */}
                  <aside className="w-1/4 bg-white p-4 rounded-lg shadow">
          <div className="mb-4">
          <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back
        </button>
        
            <div className="text-lg font-semibold mt-3">Overview</div>
            <div className="text-sm text-gray-500">
              Course by Dr. Andi Prasetyo, Ph.D. in collaboration with
              Universitas Indonesia
            </div>
            <div className="text-lg font-semibold text-blue-800 mt-2">
              Data Analysis Fundamentals
            </div>
            <div className="flex space-x-2 mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Data Analysis
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Statistics
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Excel
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                SQL
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                Power BI
              </span>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              In this course, you will master the foundational skills of data
              analysis with practical applications in real-world scenarios.
              Learn how to collect, clean, and manipulate data effectively,
              create compelling data visualizations, and apply basic statistical
              techniques to drive data-driven decision-making. This course is
              suitable for beginners and those looking to strengthen their
              analytical skills.
            </div>
            <div className="text-lg font-semibold mt-4">What You'll Learn:</div>
            <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
              <li>Principles of data collection and cleaning</li>
              <li>
                Hands-on experience with Excel and SQL for data manipulation
              </li>
              <li>Visualizing data with Power BI for impactful storytelling</li>
              <li>Basic statistical analysis for interpreting data patterns</li>
              <li>Real-world case studies to build practical expertise</li>
            </ul>
          </div>
        </aside>
    </main>
  );
};

export default MaterialDetail;
