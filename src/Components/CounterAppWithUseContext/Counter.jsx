import React, { createContext, useState } from "react";

export const CounterContext = createContext();

function CounterCount({children}) {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount (count+1);
    }

    const Decrement = () => {
        if (count > 0)
        setCount (count - 1);
    }

    const Reset = () => {
        setCount (0);
    }

    return ( 
        <div>
            <h1>Counter App</h1>
            <CounterContext.Provider value={{count, Increment, Decrement, Reset}}>
                {children}
            </CounterContext.Provider>
        </div>
    ) 
}

export default CounterCount;
