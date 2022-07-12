import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    // const [canRender, setCanRender] = useState(false);


    
    const createUser = (e) => {
        e.preventDefault();
        // setCanRender = (true);
        const newUser = { firstName, lastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length == 0){
            setFirstNameError("");
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters long");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length == 0){
            setLastNameError("");
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters long");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length == 0){
            setEmailError("");
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long");
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length == 0){
            setPasswordError("");
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long")
        }
        else{
            setPasswordError("")
        }
        if(e.target.value != confirmPassword){
            setConfirmPasswordError("Passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setConfirmPasswordError("Passwords must match")
        }
        else{
            setConfirmPasswordError("")
        }
    }




    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    {/* <input type="text" onChange={ (e) => handleFirstName } value = {firstName}/> */}
                    <input type="text" onChange={handleFirstName} value={firstName}/>
                    {
                        firstNameError ? <p style={{color: 'red'}}> {firstNameError} </p> : ""
                    }

                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={handleLastName} value={lastName} />
                    {
                        lastNameError ? <p style={{color: 'red'}}> {lastNameError} </p> : ""
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={handleEmail} value={email} />
                    {
                        emailError ? <p style={{color: 'red'}}> {emailError} </p> : ""
                    }                    
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} value={password}/>
                    {
                        passwordError ? <p style={{color: 'red'}}> {passwordError} </p> : ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} value={confirmPassword}/>
                    {
                        confirmPasswordError ? <p style={{color: 'red'}}> {confirmPasswordError} </p> : ""
                    }
                </div>
                
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};
    
export default UserForm;