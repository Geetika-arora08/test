function Main(){
    return(
        <div style={{backgroundColor:"blanchedalmond"}}>
            <h1>Registeration Page</h1>
            <table>
            <tr>
                <td>First Name</td>
                <td><input type="text" name="" id=""></input></td>
            
                <td>Last Name</td>
                <td><input type="text" name="" id=""></input></td>
            </tr>

            <tr>
                <td>Email</td>
                <td><input type="email" name="" id=""></input></td>
            
                <td>Mobile No</td>
                <td><input type="tel" name="" id=""></input></td>
            </tr>

            <tr>
                <td>Password</td>
                <td><input type="password" name="" id=""></input></td>
            
                <td>Confirm Password</td>
                <td><input type="password" name="" id=""></input></td>
            </tr>

            <tr>
                <td>Gender</td>
                <td><input type="radio" name="gender" id=""></input>Male
                <input type="radio" name="gender" id=""></input>Female
                <input type="radio" name="gender" id=""></input>Others
                </td>
            </tr>
            </table>
            <button>Register</button>
        </div>
    )
}

export default Main;