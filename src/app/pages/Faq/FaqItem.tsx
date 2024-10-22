import React from 'react'

const FaqItem = ({question, answer}) => {
  return (
    <div className='faq-item mb-4'>
        <h2 className='text-lg font-bold'>{question}</h2>
        <p className='text-gray-600'>{answer}</p>
      </div>
  );
};

export default FaqItem;
