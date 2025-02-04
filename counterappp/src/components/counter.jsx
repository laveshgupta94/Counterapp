import React from 'react';
import { useState } from 'react';
const Counter = () => {

        const[count,setCount]=useState(0);
        const Increment=()=>{
            setCount(count+1);
        }
        const Decrement=()=>{
            setCount(count-1);
        }
        const Reset =()=>{
            setCount(0)
        }
    return(
        <div>
            <h1> {count}</h1>
            <button onClick={Increment} style={{fontSize:'20px'}}>Increment</button>
        
            <button onClick={Decrement} style={{fontSize:'20px'}}>Decrement</button>
            
            <button onClick={Reset} style={{fontSize:'20px'}}>Reset</button>
        </div>
    )
}

export default Counter