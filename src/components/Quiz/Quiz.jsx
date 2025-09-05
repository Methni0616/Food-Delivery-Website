import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(2);
  const question = data[index];

  const handleNext = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
    } else {
      alert("Quiz Completed!");
      setIndex(0); // Optional: restart
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr/>
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li>{question.option1}</li>
        <li>{question.option2}</li>
        <li>{question.option3}</li>
        <li>{question.option4}</li>
      </ul>
      <button onClick={handleNext}>Next</button>
      <div className='index'>{index + 1} of {data.length} questions</div>
    </div>
  )
}

export default Quiz;
