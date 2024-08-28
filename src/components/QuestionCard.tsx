import React, { useEffect, useState } from 'react';
import ScoreBoard from './ScoreBoard';

function QuestionCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [disable, setDisable] = useState(true);
  const [secondDisable, setSecondDisable] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score ,setScore]=useState<number>(0);
  const [clicked,setIsclicked] = useState<boolean>(true);
  const [finished,setIsfinished] = useState<boolean>(false);

  const questionBank = [
    {
      question: "What is the currency of India?",
      option: ["Rupee", "Dollar", "Pound", "Paisa"],
      correctAnswer: "Rupee",
      questionNumber: 1
    },
    {
      question: "What is the currency of South Korea?",
      option: ["Rupee", "Dinar", "Won", "Paisa"],
      correctAnswer: "Won",
      questionNumber: 2
    },
    {
      question: "What is the currency of Saudi?",
      option: ["Paisa", "Canada Dollar", "Riyadh", "Rupee"],
      correctAnswer: "Riyadh",
      questionNumber: 3
    },
    {
      question: "What is the color of tomato?",
      option: ["Red", "Green", "Purple", "Pink"],
      correctAnswer: "Red",
      questionNumber: 4
    }
  ];

  useEffect(() => {
    setDisable(currentQuestion === 0);
    setSecondDisable(currentQuestion === questionBank.length - 1);
  }, [currentQuestion]);

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1);
    setSelectedOption(null);
    setIsclicked(true); 
  };

  const previousQuestion = () => {
    setCurrentQuestion(prev => prev - 1);
    setSelectedOption(null); 
  };

  const handleColor = (option: string) => {
    if (selectedOption === null) return ''; 
    if (option === questionBank[currentQuestion].correctAnswer) {
      return option === selectedOption ? "correct" : ""; 
    }
    return option === selectedOption ? "incorrect" : ""; 
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    if(option === questionBank[currentQuestion].correctAnswer)
      setScore((score)=>score+1);
  };

  return (
   

    <div className='questionBox'>
    {
      finished ?
      ( <ScoreBoard score={score} total={questionBank.length}/>)
      :
      (
        <>
      <p>Score: {score}</p>
      <p>
        <span>{questionBank[currentQuestion].questionNumber}. </span>
        {questionBank[currentQuestion].question}
      </p>
      <div className='options'>
        {questionBank[currentQuestion].option.map((opt, index) => (
          <p
            key={index}
            className={handleColor(opt)}
            onClick={() => 
              { 
                if(clicked)
                {
                  handleSelectedOption(opt)
                  setIsfinished(currentQuestion+1 === questionBank.length );
                }
                setIsclicked(false);
              }
              }
            
          >
            {opt}
          </p>
        ))}
      </div>
      <button disabled={disable} className='previousButton' onClick={previousQuestion}>
        Previous
      </button>
      <button disabled={secondDisable} className='nextButton' onClick={nextQuestion}>
        Next
      </button>
      </>
       ) 
       }
    </div>
    
  );
}

export default QuestionCard;