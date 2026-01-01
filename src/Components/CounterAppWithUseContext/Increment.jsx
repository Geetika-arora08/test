import React, { useContext } from "react";
import { CounterContext } from "./Counter";

function IncrementButton() {
    const {Increment} = useContext(CounterContext);
    return (
        <div>
        <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default IncrementButton;