import React, { useState,useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  if (timeRemaining===0){
    setTimeRemaining(10)
    handleAnswer(false)
  }
  function timer(){
    console.log("timer Called")
 
  }
  useEffect(()=>{
   console.log("useEffect called") 
   const time=setTimeout(()=>{
    setInterval(()=>{
      setTimeRemaining(time=>time-=1)
     
   },1000)},0)
  return ()=>{
    clearTimeout()
    clearInterval()
  }
  return  clearTimeout(time)
  },[])
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
