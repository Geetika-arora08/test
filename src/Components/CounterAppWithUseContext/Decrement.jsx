import { useContext } from "react";
import { CounterContext } from "./Counter";

function DecrementButton() {
    const {Decrement} = useContext(CounterContext);
    return (
        <div>
            <button onClick={Decrement}>Decrement</button>
        </div>
    )
}

export default DecrementButton;