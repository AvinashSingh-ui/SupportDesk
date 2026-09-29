import { useState } from "react";

function TicketCounter() {
    const [count,setcount]=useState(0);

    const handleIncrement=()=>{
        setcount(prevCount=>prevCount+1);
    }
    const handleDecrement=()=>{
        setcount(prevCount=>Math.max(0,prevCount-1));
    }
    const Reset=()=>{
        setcount(0);
    }
  return (
    <div>
        <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default TicketCounter
