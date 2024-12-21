import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border rounded-lg mb-4">
    <div
      className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-medium">{question}</h3>
      <i className={`fas ${isOpen ? 'fa-times' : 'fa-plus'}`}></i>
    </div>
    {isOpen && (
      <div className="p-4 bg-blue-100">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to complete a course on PINTURA?',
      answer: '',
    },
    {
      question: 'What factors determine the course cost on PINTURA?',
      answer:
        'The cost of PINTURA courses is mostly free. Only specific features, like downloadable resume templates, require a paid subscription.',
    },
    {
      question: 'Do you provide career support services?',
      answer: '',
    },
    {
      question: 'What is the process to enroll in a PINTURA course?',
      answer: '',
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Need quick answers? Here are some common questions to help guide you.
        </p>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
