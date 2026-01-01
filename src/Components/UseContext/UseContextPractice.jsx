import { createContext, useContext } from "react";


// 1️⃣ Create the context (Context Provider)
//     const ThemeContext = createContext("light");

//     function Light() {
//         const theme = "Hello! Its a light theme";
//     return (
//         <ThemeContext.Provider value={theme}>
//             <div style={{padding:"20px"}}>
//                 <h1>Example of useContext Hook</h1>
//                 <ChildComponent></ChildComponent>
//             </div>

//         </ThemeContext.Provider>
        
//     )
// }


// //  Use the context (Context Consumer)

//     function ChildComponent() {
//         const myTheme = useContext(ThemeContext);
//         // console.log(myTheme);
//         return(
//             <div>
//                 <h2>Current Theme is: {myTheme} </h2>
//             </div>
//         )
//     } 

// export default Light;


// usercontext that provides user data(name, email) & access nd display user data in multiple components (eg, navbar, profile, footer)


//  const userContext = createContext();

//      function Details() {  // user and info is a object 
//          const info = {
//             name: "Geetika",
//             email: "geetika62@gmail.com"
//         };console.log(info);

//          return (
//             <userContext.Provider value={info}>
//                 <h1 style={{textAlign: "center"}}>Details of User</h1>
//                 <NavBar></NavBar>
//                 <Profile></Profile>
//                 <Footer></Footer>
//             </userContext.Provider>
//     )
// }


// function NavBar() {
//     const {name} = useContext(userContext);
//     return(
//           <div style={styles.display}>
//             <h2>Navbar</h2>
//             <h3>Welcome {name}</h3>
//         </div>
//     )
// }

// function Profile() {
//     const {name, email} = useContext(userContext);
//     return(
//         <div style={styles.display}>
//         <h2>Profile</h2>
//         <p>Name : {name}</p>
//         <p>Email : {email}</p>
//         </div>
        
//     )
// }

// function Footer () {
//     const {email} = useContext(userContext);
//     return(
        
//         <div style={styles.display}>
//             <h2>Footer</h2>
//             <h3>Welcome {email}</h3>
//         </div>
//     )
// }
// export default Details;

// css for components//

// const styles = {
    
//     display : {
//         border: '1px solid red',
//         borderRadius: '16px',
//         padding: '10px',
//         width: '300px',
//         margin: '10px 530px',
//         textAlign: 'center',
       
//     },

// };

