import React, {useState} from 'react';

const RegisterForm = () => {
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] =useState("");

    const formMessage = () => {
        if ( firstName.length < 2){
            return "First Name must be at least 2 characters";
        }
    }
    return (
        <div classNAme="container">
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="" id="" className="form-control"/>
                    <p className="text-danger">{formMessage()}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="" id="" className="form-control"/>
                    {
                        lastName.length < 2 || lastName.length >20?
                        <p className="text-danger">Last Name must be at least 2 characters</p>:
                        ""
                    }
                </div> 
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" className="form-control"/>
                    {
                        email.length < 5 || email.length >20?
                        <p className="text-danger">Emailmust be at least 5 characters</p>:
                        ""
                    }
                </div> 
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="" className="form-control"/>
                    {
                        password.length < 8?
                        <p className="text-danger">Password must be at least 2 characters</p>:
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} name="" id="" className="form-control"/>
                    {
                        confirmPassword.length < 8?
                        <p className="text-danger">Password must match</p>:
                        ""
                    }
                </div>
                <br></br>
            </form>
                <p>Your Form Data</p>
                <hr></hr>
                <br></br>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};


export default RegisterForm;