import React, { useEffect, useState } from 'react';
import './App.css'
import QuestionCard from './components/QuestionCard';
const App: React.FC =()=> {

  const [startClick,setstartClick] = useState<boolean>(true);

  return (
  
    <div className='page'>
        <div className='content'>
          {
            startClick ?(
           <>
            <p className='introHead'>REACT QUIZ</p>
            <button onClick={()=>{
              setstartClick(!startClick)
            }
            }>
              Start Quiz</button>
           </>
            )
           :
            (
            <QuestionCard/>
          )   
          }
        </div>

    </div>
      
      
    
  );
}

export default App;
