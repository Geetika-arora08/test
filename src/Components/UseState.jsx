import React, { useState } from "react";

//  function Counter(){
//      const [count, SetCount] = useState(1);
    
//      const changeNumber = () => {
//             SetCount(count + 1);
//      }
//      return(
//           <div>
//         <h1>Counter App</h1>
//         <h2>{count}</h2>
        
//         <button onClick={changeNumber}>Change</button>
//     </div>
//      );
// }

// export default Counter;



// function CounterApp(){
//     
//      const [value, SetValue] = useState(0);
    
//      const Increase = () => {
//             SetValue(value + 1);
//      }

//      const Decrease = () => {
//         if (value > 0){
//             SetValue(value - 1)
//         }
//      }

//      const Reset = () => {
//             SetValue(0);
//      }

//      return(
//           <div>
//         <h1>Counter App</h1>
//         <h2>{value}</h2>
        
//         <button onClick={Increase}>Increment</button>
//         <button onClick={Decrease}>Decrement</button>
//         <button onClick={Reset}>Reset</button>
//     </div>
//      );
// }

// export default CounterApp;


// create a toggle button that changes the text between "ON" and "OFF" using useState

// function Toggle() {
  
//    const [change,setChange] = useState("OFF");

//     function changeText(){   
//        if (change == "OFF")
//         {
//         setChange("ON")
//        }
//        else(
//         setChange("OFF")
//        )  

// }
//     return(
//         <div>
//             <h2>{change}</h2>
//             <button onClick={changeText}>Change Text</button>
//         </div>
//     )
// }

// export default Toggle;


// function Display() {
//   const [show, setShow] = useState(true);    //false is used for hidden something by default

//   return (
//     <div>

//       <button onClick={() => setShow(!show)}>Show / Hide</button>
//       {/* {console.log(show)} */}
//       {show && <p>Hello ! I am paragraph</p>}

//     </div>
//   );
// }

// export default Display;


// function ThemeChanger() {
//     const [light,setLight]=useState(true);
    
//     return(
//         <div style={{ 
//             background: light ? "#f5f5f5" : "#222" , 
//             color: light ? "#222" : "#f5f5f5", 
//             height:"100vh", 
//             display:"flex", 
//             justifyContent:"center", 
//             alignItems:"center", 
//             flexDirection:"column", 
//         }}
//         >

//       <h1>{light ?  "🌞 Light" :"🌙 Dark" }</h1>
//       <button onClick={() => setLight(!light)}>Switch to {light ? "Dark" : "Light"}</button>
//     </div>
       
//     );
// };

// export default ThemeChanger;


// function UsingMap() {
//     const [list, setList] = useState(["Apple", "Mango", "Banana"]);
//     const [items, setItems] = useState();

//     function handleAdd(){
//         if (items!=="")
//             {
//                 setList([...list, items]);
//                 setItems("");
//             }
//     }

//     return( 
//         <div>
//             <ul>
//                 <h2>List of Fruits Name</h2>
//                 {list.map((item, i) => (
//                     <li key={i}>{item}</li>
//                 ))}
//             </ul> 
//             <input type="text" name="name" id="name" value={items}
//             onChange={(e) => setItems(e.target.value)} />
//             <button onClick={handleAdd}>Add Items</button>
//         </div>
//     )
// };

// export default UsingMap;


// export default function FavouriteColor() {
    //const color=red;
   // const [color,setColor]=useState('red');
    // function changeColor(){
    //     setColor('green');
    // }
   // const [studentinfo,setStudentinfo]=useState({id:123,name:'Rajat',email:'rajat@gmail.com'});
//     const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
//     <div>
//         <h1>{car.brand}</h1>
//         <p>{car.color}</p>
//         {/* 
//         <button onClick={()=>setColor('Yellow')}>change color</button> */}
//     </div>
//   )
// }




function TodoList() {
    const [list, setList] = useState([]);
    const [items, setItems] = useState("");

    function handleAdd(){
        if (items!=="")
            {
                setList([...list, items]);
                setItems("");
            }
    }


    function handleDelete(index) {
        const updatedList = list.filter((_, i) => i !== index);
        setList(updatedList); 
    }

    function deleteAll() {
        setList([]);
    }

    
    return( 
        <div>

            <div style={{ 
            background: "brown", 
            color: "#f5f5f5", 
            height:"100vh", 
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center", 
            flexDirection:"column", 
        }}
        >
            <ul>
                <h2 style={{marginRight:'50px'}}>To Do List / CheckList</h2>
                {
                list.map((items, i) => (
                    <li key={i}>{items}{""}
                    <i className="far fa-trash-alt" style={{marginLeft:'10px'}} onClick={() => handleDelete(i)}></i>
                    </li>
                ))
                }
            </ul> 
            <div>
            <input style={{width:'250px'}} type="text" name="name" id="name" value={items}
            onChange={(e) => setItems(e.target.value)} placeholder="✍️ Add your items here" />
            <span><i className="fa fa-plus" onClick={handleAdd}></i> </span>
            
            
            <i className="far fa-trash-alt" onClick={deleteAll}></i>

            </div>
            <button style={{marginTop:'20px', width: '130px', marginRight:'150px'}} onClick={handleAdd}>Add Items</button>
            <button style={{marginLeft:'320px', width: '130px', marginTop:'-21px', marginRight:'160px'}} onClick={deleteAll}>Delete All Items</button>
            </div>
        </div>
    )
};

export default TodoList;