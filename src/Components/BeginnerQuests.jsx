import { useEffect, useState } from "react";

// function Compount() {
//     useEffect(() => {
//         console.log("Component Mount");
//     }, []);

//     return (
//         <div>
           
//         </div>
//     )
// }

// export default Compount;


// console value on button click

// function Counter() {
//     const [count, setCount] = useState(0);

//         useEffect(() => {
//        console.log(count);
//     }, [count])

//         return (
//             <div>
//                 <h1>{count}</h1>
//                 <button onClick={()=>{setCount(count+1)}}>Click to console</button>

//             </div>
//         )
//     }
    
//     export default Counter;

// console value without button click

// function Counter() {
//     const [count, setCount] = useState(0);

//         useEffect(() => {
//             setTimeout(() => {
//                 setCount(count+1);
//             }, 1000);

//         });

//         console.log(count);

//         return (
//             <div>
//                 <h1>{count}</h1>
//             </div>
//         )
//     }
    
// export default Counter;

// function Change() {
//     const [changer, setChanger] = useState(0);

//         useEffect(() => {
//             document.title=changer;

//         });
//         return (
//             <div>
//                 <h1>{changer}</h1>
//                 <button onClick={()=>{setChanger(changer+1)}}>Click to change the Title</button>
//             </div>
//         )
//     }
    
// export default Change;


function Mount() {
  const [showChild, setShowChild] = useState(false);

function ChildComponent() {
  useEffect(() => {
    console.log("✅ Child Component mounted");

    // Cleanup function — runs when component unmounts
    return () => {
      console.log("🗑️ Child Component unmounted");
    };
  }, []); // Empty dependency array → runs only once on mount/unmount

  return <h2>I am the Child Component</h2>;
}

  return (
    <div>
      <h1>Mount & Unmount Example</h1>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "Hide" : "Show"} Child
      </button>

      {showChild && <ChildComponent />}
    </div>
  );
}    
export default Mount;
