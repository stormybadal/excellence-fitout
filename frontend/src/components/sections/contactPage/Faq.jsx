// import React, { useState } from 'react';

// const faqs = [
//   {
//     question: 'How long does a typical project take?',
//     answer:
//       'Project timelines vary based on scope and complexity. Small renovations may take 2–4 weeks, while larger construction projects can take 3–6 months. We provide detailed timelines during consultation.',
//   },
//   {
//     question: 'What areas do you serve?',
//     answer:
//       'We serve all areas across Dubai and the greater UAE, including residential communities, commercial districts, and industrial zones.',
//   },
//   {
//     question: 'Do you provide free estimates?',
//     answer:
//       'Yes, we offer free consultations and estimates for all projects. Our team will visit your site, assess requirements, and provide a detailed quote within 48 hours.',
//   },
//   {
//     question: 'Do you offer emergency services?',
//     answer:
//       'Yes, we provide 24/7 emergency maintenance and repair services for urgent issues that require immediate attention.',
//   },
//   {
//     question: 'What payment methods do you accept?',
//     answer:
//       'We accept bank transfers, major credit cards, and secure digital payments. Payment schedules can be discussed during consultation.',
//   },
// ];

// const Faq = () => {
//      const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <section className="bg-[var(--color-background)] py-20 px-4">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           Frequently Asked <br/><span className="text-orange-500">Questions</span>
//         </h2>
//         <p className="text-gray-600 mt-4">
//           Common questions about our services and process
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
//           >
//              <button
//               className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
//               onClick={() => toggle(index)}
//             >
//               <span>{faq.question}</span>
//               <span className="text-2xl font-bold">
//                 {openIndex === index ? '-' : '+'}
//               </span>
//             </button>
//             {openIndex === index && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Faq;



import React, { useState } from 'react';

const leftFaqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. Small renovations may take 2–4 weeks, while larger construction projects can take 3–6 months. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you provide free estimates?',
    answer:
      'Yes, we offer free consultations and estimates for all projects. Our team will visit your site, assess requirements, and provide a detailed quote within 48 hours.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers, major credit cards, and secure digital payments. Payment schedules can be discussed during consultation.',
  },
];

const rightFaqs = [
  {
    question: 'What areas do you serve?',
    answer:
      'We serve all areas across Dubai and the greater UAE, including residential communities, commercial districts, and industrial zones.',
  },
  {
    question: 'Do you offer emergency services?',
    answer:
      'Yes, we provide 24/7 emergency maintenance and repair services for urgent issues that require immediate attention.',
  },
];

const Faq = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  const toggleLeft = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  return (
    <section className="bg-[var(--color-background)] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Frequently Asked <br />
          <span className="text-orange-500">Questions</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Common questions about our services and process
        </p>
      </div>

      {/* Two columns with separate maps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {leftFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => toggleLeft(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl font-bold">
                  {openIndexLeft === index ? '-' : '+'}
                </span>
              </button>
              <div
                className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndexLeft === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {rightFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transition hover:shadow-xl"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => toggleRight(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl font-bold">
                  {openIndexRight === index ? '-' : '+'}
                </span>
              </button>
              <div
                className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndexRight === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
