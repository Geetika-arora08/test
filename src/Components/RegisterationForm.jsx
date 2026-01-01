import React from "react";

function RegisterationForm(){

    // Create State Variable for form fields

    const [formData, SetFormData] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    // Handle input change

    const handleChange=(e)=>{
        const {name, value}=e.target;
        SetFormData({
            ...formData,
            [name]:value
        });
    };

    // Handle form submit

    const handleSubmit = (e) => {
        e.preventDefault();   // prevent page reload
        alert(`DATA SUBMITTED...!!!\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: *****`);
        // alert("Data Submitted!");
        console.log('User Registration Data:' , formData);
    };

    // const handleClick = () => {
    // alert("Data Submitted!");
    // };

    return(
        <div>
             <div style={styles.container}>
             <h2 style={{textAlign:'center'}}>Registeration Form</h2>
             <form style={styles.form} onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" placeholder="  Enter your name" 
                value={formData.name}  onChange={handleChange} required/>
                <label>Email:</label>
                <input type="text" name="email" placeholder="  Enter your email"
                value={formData.email} onChange={handleChange} required/>
                <label>Password:</label>
                <input type="password" name="password" placeholder="  Enter your password"
                value={formData.password} onChange={handleChange} required/>
                
                {/* <button type="submit" onClick={handleClick}>Register</button> */}
                <button type="submit">Register</button>
             </form>
        </div> 
        </div>

    )
}


const styles = {
    container: {
        width: '600px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid blue',
        borderRadius: '10px',  
    },

form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}
}

export default RegisterationForm;   