import React from 'react'

interface Proops{
    score:number;
    total:number;
  }

const ScoreBoard:React.FC<Proops>=({score,total}) =>{
  return (
    <div>
     <p>Your response has been calculated and the final score has been evaluated as: </p> 
     <p>{score}/{total}</p>
    </div>
  );
};

export default ScoreBoard;
