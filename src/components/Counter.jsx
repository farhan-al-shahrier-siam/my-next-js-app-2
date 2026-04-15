"use client"

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    // console.log("Counter value: ", count)
    return (
        <div>
            <h2 className="text-5xl">Counter: {count}</h2>
            <button onClick={()=> setCount(count+1)} className="bg-amber-300 p-2 rounded-2xl hover:bg-amber-500 hover:p-3 active:scale-95">Add+1</button>
        </div>
    );
};

export default Counter;