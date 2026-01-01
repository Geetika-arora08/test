import React, { useEffect, useState } from "react";

// function UseEffect() {

//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount(count + 1);
//         }, 1000)
//     }, [])

//     return (
//         <div>
//             <h1>{count}</h1>
//         </div>
//     )
// }

// export default UseEffect;/



// function CheckStatus() {
//      const [online, setOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const update = () => setOnline(navigator.onLine);
//     window.addEventListener("online", update);
//     window.addEventListener("offline", update);
//     return () => {
//       window.removeEventListener("online", update);
//       window.removeEventListener("offline", update);
//     };
//   }, []);

//   return <p>{online ? "🟢 Online" : "🔴 Offline"}</p>;
// }

//     const[inOnline, setIsOnline] = useState(navigator.onLine);

//     useEffect(() => {
//         const handleOnline =() => setIsOnline(true);
//         const handleOffline =() => setIsOnline(false);

//         window.addEventListener("online", handleOnline);
//         window.addEventListener("offline", handleOffline);

//         return() => {
//             window.removeEventListener("online", handleOnline);
//             window.removeEventListener("offline", handleOffline);
//         };
//     },[]);

// return(
//     <div style={{padding: "20px"}}>
//         <h3>Status : {inOnline ? "🟢 Online" : "🔴 Offline"}</h3>
//     </div>
// )

// }

// export default CheckStatus;

// function WindowResize() {
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => setWidth(window.innerWidth);
//         window.addEventListener("resize", handleResize);

//         // cleanup
//         return() => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <div style={{padding:"20px"}}>
//             <h3>Window width: {width}px</h3>
//         </div>
//     )
// }

// export default WindowResize;