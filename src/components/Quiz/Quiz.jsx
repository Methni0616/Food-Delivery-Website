import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const question = data[index];

  const checkAns = (e, option) => {
    const clicked = e.currentTarget;
    const listItems = clicked.parentElement.querySelectorAll('li');
    listItems.forEach(li => li.classList.remove('correct', 'wrong'));

    if (question.answer === option) {
      clicked.classList.add('correct');
      setScore(prev => prev + 1); // ✅ increase score
    } else {
      clicked.classList.add('wrong');
      const correctLi = [...listItems].find(li => li.textContent === question.answer);
      if (correctLi) correctLi.classList.add('correct');
    }
  };

  const handleNext = () => {
    if (index + 1 < data.length) {
      setIndex(index + 1);
      setTimeout(() => {
        const listItems = document.querySelectorAll('ul li');
        listItems.forEach(li => li.classList.remove('correct', 'wrong'));
      }, 0);
    } else {
      // ✅ quiz finished → show results
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />

      {showResults ? (
        // ✅ Results Page
        <div className="results">
          <h2>Quiz Completed 🎉</h2>
          <p>You scored <b>{score}</b> out of <b>{data.length}</b></p>
          <p>Percentage: {Math.round((score / data.length) * 100)}%</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        // ✅ Quiz Questions
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li onClick={(e) => checkAns(e, question.option1)}>{question.option1}</li>
            <li onClick={(e) => checkAns(e, question.option2)}>{question.option2}</li>
            <li onClick={(e) => checkAns(e, question.option3)}>{question.option3}</li>
            <li onClick={(e) => checkAns(e, question.option4)}>{question.option4}</li>
          </ul>
          <button onClick={handleNext}>Next</button>
          <div className='index'>{index + 1} of {data.length} questions</div>
        </>
      )}
    </div>
  );
};

export default Quiz;

