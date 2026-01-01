import { createContext, useState } from "react";

const ThemeContext = createContext();

function GloballyTheme ({children}) {
    const [theme, setTheme] = useState("Light");

    const Light = () => {
        setTheme(theme === "Dark" ? "Light" : "Dark");

    }

    const Dark = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");

    }

    return (
    //      <div style={{ 
    //         background: theme ? "#f5f5f5" : "#222" , 
    //         color: theme ? "#222" : "#f5f5f5", 
    //         height:"100vh", 
    //         display:"flex", 
    //         justifyContent:"center", 
    //         alignItems:"center", 
    //         flexDirection:"column", 
    //     }}
    //     >

    //   <h1>{theme ?  "🌞 Light" :"🌙 Dark" }</h1>
    //   <button onClick={() => setTheme(!theme)}>Switch to {theme ? "Dark" : "Light"}</button>
    // </div>
        <div style={styles.dispcolor}>
            <h2>Globally Theme</h2>
        </div>
    )
}

export default GloballyTheme;

const styles = {
    
    dispcolor : {
        border: '1px solid red',
        borderRadius: '16px',
        padding: '10px',
        width: '950px',
        margin: '10px 130px',
        textAlign: 'center',
        height : '400px',
       
    }
}