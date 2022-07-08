import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
            <p>testing this</p>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value = {firstName}/>
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value = {lastName}/>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value ={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } value = {password} />
                </div>
                
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First name stored in state: {firstName}</p>
                <p>Last name stored in state: {lastName}</p>
                <p>Email stored in state: {email}</p>
                <p>Password stored in state: {password}</p>
            </div>
        </div>
    );
};
    
export default UserForm;