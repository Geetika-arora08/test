import React, { useContext } from "react";
import { UserContext } from "./Details";

function Profile() {

    const {name, email} = useContext(UserContext);
    return (
         <div style={styles.display}>
            <h2>Profile Details - this is a profile page - useContext</h2>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    )
}

export default Profile;



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