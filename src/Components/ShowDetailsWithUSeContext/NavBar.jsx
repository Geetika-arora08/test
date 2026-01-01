import React, { useContext } from "react";
import { UserContext } from "./Details";

function NavBar() {

    const {name} = useContext(UserContext);
   
    return (
        <div style={styles.display}>
       <h2>Welcome, {name} - this is a navbar - useContext</h2>
       </div>
    )
};

export default NavBar;

const styles = {
    
    display : {
        border: '1px solid red',
        borderRadius: '16px',
        padding: '10px',
        width: '450px',
        margin: '10px 530px',
        textAlign: 'center',
       
    }
}