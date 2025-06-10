import { useState } from "react";
import { useEffect } from "react";
import Statistics from "./Components/Statistics/Statistics";
import Feedback from "./Components/FeedbackOptios/FeedbackOptions";
function App() {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const [total,setTotal]=useState(0)
  const [positivePercentage,setPositivePercentage]=useState(0)
  useEffect(()=>{
    setTotal(good+neutral+bad)
  },[good,neutral,bad])
  const goodFeedback=()=>{
    setGood(good+1)
  }
  const neutralFeedback=()=>{
    setNeutral(neutral+1)
  }
  const badFeedback=()=>{
    setBad(bad+1)
  }
  useEffect(()=>{
    if(good||total!==0){
      setPositivePercentage(Math.round((good / total) * 100)) 
    }else{
      setPositivePercentage(0)
    }
  },[good,total])
  const Array=[{func:goodFeedback,name:"good"},{func:neutralFeedback,name:"neutral"},{func:badFeedback,name:"bad"}]
  return (
    <>
    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
    <h1>Please leave feedback</h1>
    {
      Array.map((item)=>{
        return <Feedback name={item.func} options={item.name} key={item.name}/>
      })
    }
    </>
  );
}

export default App;