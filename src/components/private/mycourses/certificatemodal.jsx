import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QRCode} from 'react-qrcode';

const CertificateModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil state dari halaman sebelumnya
  const state = location.state || {};
  const { enrollmentId } = state; // Ambil enrollmentId dari state

  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Pastikan enrollmentId tersedia sebelum fetch
    if (!enrollmentId) {
      console.error("Enrollment ID not provided");
      setLoading(false);
      return;
    }

    // Fetch data dari server
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`/api/auth/certificate/${enrollmentId}`);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        setCertificateData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificate();
  }, [enrollmentId]);

  // Fungsi untuk generate certificateId
  const   generateCertificateId = (dateCompletion, enrollmentId) => {
    const date = new Date(dateCompletion);
    const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
    return `${enrollmentId}${formattedDate}`;
  };

  // Format the date once certificateData is available
  const formattedDate = certificateData ? (() => {
    const isoDate = certificateData.dateCompletion;
    const date = new Date(isoDate);

    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta' // Sesuaikan zona waktu
    };

    return new Intl.DateTimeFormat('id-ID', options).format(date);
  })() : null;

  const certificateId = certificateData ? generateCertificateId(certificateData.dateCompletion, enrollmentId) : null;

  const handleClose = () => {
    navigate('/dashboard/mycourses/completed');
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : certificateData ? (
          <>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">Congratulations on Completing the Course! 🎉</h1>
              <p className="text-gray-600 mt-2">You've successfully completed "{certificateData.courseName}" by {certificateData.institution}.</p>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div className="bg-blue-600 text-white p-6 rounded-lg w-1/3">
                <h2 className="text-lg font-bold">Certificate of Completion</h2>
                <div className="mt-4">
                  <i className="fas fa-award text-4xl"></i>
                </div>
              </div>
              <div className="w-2/3 pl-8">
                <h2 className="text-3xl font-bold text-blue-600">{certificateData.userName}</h2>
                <p className="text-gray-600 mt-2">Is hereby awarded this certificate after successfully completing the <span className="text-blue-600">{certificateData.courseName}</span> course and passing the knowledge exam.</p>
                <div className="mt-4">
                  <p className="text-gray-600">Presented by</p>
                  <div className="flex items-center mt-2">
                    <img src={certificateData.imageUrl} alt={certificateData.institution} className="w-12 h-12"/>
                    <p className="ml-2 text-gray-800 font-bold">{certificateData.institution}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Certificate ID: {certificateId}</p>
              </div>
              <div className="flex items-center">
                <div className="mr-8">
                <QRCode value={certificateId} size={256} />
              
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Indonesia, {formattedDate}</p>
                  <p className="text-gray-800 font-bold mt-2">Waindini Nur Fitri</p>
                  <p className="text-gray-600">CEO {certificateData.institution}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-blue-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-600"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-blue-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-blue-600 flex items-center"><i className="fas fa-download mr-2"></i>Download PDF</a>
            </div>
          </>
        ) : (
          <p className="text-center text-red-600">Certificate not found or course not completed yet</p>
        )}
      </div>
    </div>
  );
};

export default CertificateModal;
