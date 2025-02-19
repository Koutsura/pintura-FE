import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgVerificationCode2.svg';
import Img2 from '../../assets/public/imgActivationPage.svg';

const VerificationCodePage = () => {
    const navigate = useNavigate();
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('verificationEmail');
        if (savedEmail) {
            setEmail(savedEmail);
            console.log('Email from localStorage:', savedEmail);
        } else {
            console.log('No email found in localStorage');
            navigate('/register');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const verificationCode = code.join('');
        console.log('Submitting code for email:', email);
    
        setLoading(true);
        setError('');
    
        try {
            const response = await fetch('/api/auth/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    code: verificationCode
                }),
            });
    
            const data = await response.json();
            console.log('Verification response:', data);
    
            if (response.ok) {
                const { token } = data;
                if (token) {
                    localStorage.setItem('token', token);
                    console.log('Token saved to localStorage:', token);
                }
                localStorage.removeItem('verificationEmail');
                setShowSuccessPopup(true);
            } else {
                setError(data.message || 'Invalid verification code');
                setCode(['', '', '', '', '', '']);
            }
        } catch (error) {
            console.error('Verification error:', error);
            setError('An error occurred during verification');
        } finally {
            setLoading(false);
        }
    };

    const handleSendNewCode = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/send-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                setCodeSent(true);
            } else {
                setError('Failed to send new code');
            }
        } catch (error) {
            setError('Failed to send new code');
        } finally {
            setLoading(false);
        }
    };

    const handleInput = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
            const nextInput = document.querySelector(`input[name=code-${index + 1}]`);
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.querySelector(`input[name=code-${index - 1}]`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    const handlePopupButtonClick = () => {
        setShowSuccessPopup(false);
        navigate('/dashboard/home');
    };

    return (
        <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
    {showSuccessPopup ? (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div
                className="bg-white w-[700px] h-[500px] shadow-2xl rounded-lg overflow-hidden flex"
                style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)" }} // Shadow gelap
            >
                {/* Bagian kiri: Gambar */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={Img2}
                        alt="Illustration of a person holding a trophy with various icons around"
                        className="w-3/4 h-auto"
                    />
                </div>
                {/* Bagian kanan: Teks dan Tombol */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <Link
                        to="/"
                        className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back
                    </Link>
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">Activation Success</h1>
                    <p className="text-gray-600 mb-6">
                        Congratulations! Your account has been successfully activated. You are now logged in and can access your dashboard.
                    </p>
                    <button
                        onClick={handlePopupButtonClick}
                        className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
        ) : (
            <div className="flex w-full max-w-4xl">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        alt="Illustration of a person sitting on a chair with a laptop and phone"
                        className="w-3/4"
                        height="400"
                        src={Img}
                        width="400"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <Link
                        to="/"
                        className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>Back
                    </Link>
                    <h1 className="text-4xl font-bold text-blue-700 mb-2">Verification</h1>
                    <p className="text-gray-600 mb-6">
                        Please check your email, we have sent a code to {email}. Enter it below.
                    </p>
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4">
                            <div className="flex">
                                <i className="fas fa-exclamation-circle mt-1 mr-2"></i>
                                <span>{error}</span>
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {codeSent && (
                            <div className="border border-blue-500 p-4 flex items-start space-x-2 mb-4">
                                <i className="fas fa-info-circle text-blue-500 mt-1"></i>
                                <div>
                                    <p className="text-blue-500 font-semibold">Send a new code</p>
                                    <p className="text-gray-600">We have sent you the latest activation code, please check your email again.</p>
                                </div>
                            </div>
                        )}
                        <div className="bg-white p-6 shadow-md">
                            <div className="flex justify-center mb-4">
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        name={`code-${index}`}
                                        maxLength="1"
                                        className="w-12 h-12 border border-gray-300 text-center text-2xl mx-1"
                                        value={code[index]}
                                        onChange={(e) => handleInput(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 text-center mb-4">
                                Please enter the one-time password that we sent to your email.
                            </p>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Continue'}
                            </button>
                            <p className="text-center text-gray-600 mt-4">
                                Didn't get a code?{' '}
                                <button
                                    type="button"
                                    onClick={handleSendNewCode}
                                    className="text-blue-600"
                                >
                                    Send a new code
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
    
    

    );
};

export default VerificationCodePage;
