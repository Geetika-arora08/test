import { useContext } from "react";
import { CounterContext } from "./Counter";

function ResetButton () {
    const {Reset} = useContext(CounterContext);
    return (
        <div>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default ResetButton;