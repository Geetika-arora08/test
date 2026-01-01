import React, { useContext } from "react";
import { UserContext } from "./Details";

function Footer() {
    const {email} = useContext(UserContext);
    return (
        <div style={styles.display}>
             <h2>Footer - this is a footer - useContext</h2>
            <p>Email {email}</p>
        </div>
    )
}

export default Footer;


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