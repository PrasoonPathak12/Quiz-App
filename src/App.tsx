import React, { useEffect, useState } from 'react';
import './App.css'

interface quizQuestion{
  difficulty:string,
  question:string
}

function App() {

  const[data,setData] = useState<quizQuestion[]>([]);

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple')
    .then((response)=>response.json())
    .then((data)=>{
      setData(data.results)
  })
  },[])

  return (
    <div className="App">
     
      <p className='ps'>Quiz-App 🤞</p>
      
       { <div className='quiz-box moo'>
         
       </div> }

    </div>
  );
}

export default App;
