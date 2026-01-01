import React, { createContext } from "react";

export const UserContext = createContext();

function Details({children}) {  
    const user = {
        name: "Geetika",
        email: "geetika62@gmail.com"
    };
    console.log(user);
    return(
        <UserContext.Provider value={user}>
            <div style={styles.display}>
            <h1>User Details - this is a first page - createContext</h1>
            </div>
            {children}
        </UserContext.Provider>
    )
};

export default Details;

const styles = {
    
    display : {
        border: '1px solid red',
        borderRadius: '16px',
        padding: '10px',
        width: '450px',
        margin: '10px 530px',
        textAlign: 'center',
       
    },

};