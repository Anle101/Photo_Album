import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import {motion} from 'framer-motion';
import Axios from 'axios';

function Register() {

    const [Email,setEmail]= useState("");
    const [Password, setNewPassword] = useState("");
    const [CPassword, setCPassword] = useState("");
    const submitRegister = () => { 
        if (Password === CPassword) {
            console.log("done");
            Axios.post('http://localhost:3001/api/registerverification', {
                email: Email, 
                password: Password,
            }).then (() => {
                alert("Successful Registration");
                console.log("done");
            });
        }
        else {
            alert("Passwords are not the same!");
        }
    }
    return (
        <motion.div className="register-section">
        
            <div className="background" >
                <motion.div initial={{x:2000}} animate = {{ x: 750}} exit = {{x:2000}} className="rwall"></motion.div>
            
            </div>
        

            <motion.form className="registerform"  initial={{x:700}} animate = {{ x: 50}} exit = {{x:1700}}>
              
       
                <ul className="userSection">
                    <img src="/logo.png" alt="logo" className="rlogo"></img>
                    <li>
                        <input type="text" name="username" className="inputfield" placeholder = "Email" onChange = {(e) => {
                            setEmail(e.target.value);
                        }}/>
                    </li>
                    <li> 
                        <input type="password" name="password" className="inputfield" placeholder = "Enter Password" onChange = {(e) => {
                            setNewPassword(e.target.value);
                        }}></input>
                    </li>

                    <li>
                        <input type="password" name="password" className="inputfield" placeholder = "Confirm Password" onChange = {(e) => {
                            setCPassword(e.target.value);
                        }}></input>
                    </li>
                    
                    <li>
                        <button className="registerbutton" onClick = {submitRegister}>Register</button>
                        <Link to="/login" className="registerlink">Already registered? Sign in here! </Link>
                    </li>
                </ul>

                 
            </motion.form>

              
    </motion.div>
    )
}

export default Register
