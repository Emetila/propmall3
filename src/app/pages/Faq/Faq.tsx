import React from 'react';
import FaqItem from './FaqItem';
import FaqData from './FaqData';
// import { useState } from 'react';

const faq = () => {
return (
  <div className='max-w-3xl mx-auto p-4 md:p-6 lg:p-8'>
    <h1 className='text-3xl font-bold mb-4'>Frequently Asked Questions</h1>
    <div className='faq-container'>
      /* Faq items will be rendered here*/
        {/* {
  question: 'How to get started on Propmall?',
  answer: 'To get started, sign up, complete your profile, and explore investment opportunities.',
},
{
  question: 'What information do I need to provide to create an account?',
  answer: 'You need to provide basic personal information such as your name, email, and contact details.',
},
{
  question: 'Is my investment secure?',
  answer: 'Yes, Propmall ensures all investments are protected with high-security standards.',
},
{
  question: 'What is the minimum investment amount?',
  answer: 'The minimum investment amount at Propmall is $1,000, making it accessible for investors at all levels.',
},
{
  question: 'What types of investments does Propmall offer?',
  answer: 'Propmall offers a range of real estate investment opportunities including commercial and residential properties.',
},
{
  question: 'How can I track my investments?',
  answer: 'You can track your investments directly from your dashboard, available upon login.',
},
]; */}

export default function FAQ() {
const [searchTerm, setSearchTerm] = useState('');
const [openIndex, setOpenIndex] = useState(null);

const handleToggle = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

const filteredFaqs = faqs.filter((faq) =>
  faq.question.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="faq-container">
    <div className="faq-header">
      <h1>FAQs</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <div className="faq-list">
      {filteredFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>

    <style jsx>{`
      .faq-container {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
      .faq-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .faq-header h1 {
        font-size: 36px;
      }
      .faq-header input {
        padding: 10px;
        font-size: 16px;
        width: 50%;
      }
      .faq-list {
        margin-top: 20px;
      }
      .faq-item {
        margin-bottom: 10px;
        padding: 10px;
        background-color: #f9f9f9;
        border-radius: 5px;
        cursor: pointer;
      }
      .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .faq-question h3 {
        margin: 0;
        font-size: 20px;
      }
      .faq-answer {
        margin-top: 10px;
        font-size: 16px;
      }
    `}</style>
  </div>
);
}
    </div>
  </div>
);
};

export default Faq;

//   {
//     question: 'How to get started on Propmall?',
//     answer: 'To get started, sign up, complete your profile, and explore investment opportunities.',
//   },
//   {
//     question: 'What information do I need to provide to create an account?',
//     answer: 'You need to provide basic personal information such as your name, email, and contact details.',
//   },
//   {
//     question: 'Is my investment secure?',
//     answer: 'Yes, Propmall ensures all investments are protected with high-security standards.',
//   },
//   {
//     question: 'What is the minimum investment amount?',
//     answer: 'The minimum investment amount at Propmall is $1,000, making it accessible for investors at all levels.',
//   },
//   {
//     question: 'What types of investments does Propmall offer?',
//     answer: 'Propmall offers a range of real estate investment opportunities including commercial and residential properties.',
//   },
//   {
//     question: 'How can I track my investments?',
//     answer: 'You can track your investments directly from your dashboard, available upon login.',
//   },
// ];

// export default function FAQ() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const filteredFaqs = faqs.filter((faq) =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="faq-container">
//       <div className="faq-header">
//         <h1>FAQs</h1>
//         <input
//           type="text"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="faq-list">
//         {filteredFaqs.map((faq, index) => (
//           <div key={index} className="faq-item">
//             <div className="faq-question" onClick={() => handleToggle(index)}>
//               <h3>{faq.question}</h3>
//               <span>{openIndex === index ? '-' : '+'}</span>
//             </div>
//             {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .faq-container {
//           padding: 20px;
//           max-width: 800px;
//           margin: 0 auto;
//         }
//         .faq-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .faq-header h1 {
//           font-size: 36px;
//         }
//         .faq-header input {
//           padding: 10px;
//           font-size: 16px;
//           width: 50%;
//         }
//         .faq-list {
//           margin-top: 20px;
//         }
//         .faq-item {
//           margin-bottom: 10px;
//           padding: 10px;
//           background-color: #f9f9f9;
//           border-radius: 5px;
//           cursor: pointer;
//         }
//         .faq-question {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .faq-question h3 {
//           margin: 0;
//           font-size: 20px;
//         }
//         .faq-answer {
//           margin-top: 10px;
//           font-size: 16px;
//         }
//       `}</style>
//     </div>
//   );
// }


import { useState } from 'react';

const faqs = [
  {
    question: 'How to get started on Propmall?',
    answer: 'To get started, sign up, complete your profile, and explore investment opportunities.',
  },
  {
    question: 'What information do I need to provide to create an account?',
    answer: 'You need to provide basic personal information such as your name, email, and contact details.',
  },
  {
    question: 'Is my investment secure?',
    answer: 'Yes, Propmall ensures all investments are protected with high-security standards.',
  },
  {
    question: 'What is the minimum investment amount?',
    answer: 'The minimum investment amount at Propmall is $1,000, making it accessible for investors at all levels.',
  },
  {
    question: 'What types of investments does Propmall offer?',
    answer: 'Propmall offers a range of real estate investment opportunities including commercial and residential properties.',
  },
  {
    question: 'How can I track my investments?',
    answer: 'You can track your investments directly from your dashboard, available upon login.',
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>FAQs</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-header h1 {
          font-size: 36px;
        }
        .faq-header input {
          padding: 10px;
          font-size: 16px;
          width: 50%;
        }
        .faq-list {
          margin-top: 20px;
        }
        .faq-item {
          margin-bottom: 10px;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 5px;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question h3 {
          margin: 0;
          font-size: 20px;
        }
        .faq-answer {
          margin-top: 10px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}