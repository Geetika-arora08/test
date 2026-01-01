import { useContext } from "react"
import { CounterContext } from "./Counter"

function DisplayCounter() {
    const {count} = useContext(CounterContext);
    return (
        <div>
          <h2>Counter Value : {count}</h2>
        </div>
    )
}

export default DisplayCounter;