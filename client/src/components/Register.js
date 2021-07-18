import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import {motion} from 'framer-motion';
function Register() {
    return (
        <motion.div>
        
            <div className="background" >
                <motion.div initial={{x:2000}} animate = {{ x: 750}} exit = {{x:2000}} className="rwall"></motion.div>
            
            </div>
        

            <motion.form className="registerform"  initial={{x:700}} animate = {{ x: 50}} exit = {{x:1700}}>
              
       
                <ul className="userSection">
                    <img src="/logo.png" alt="logo" className="rlogo"></img>
                    <li>
                        <input type="text" name="username" className="inputfield" placeholder = "Email"></input>
                    </li>
                    <li>
                        <input type="text" name="username" className="inputfield" placeholder = "Username"></input>
                    </li>
                    <li> 
                        <input type="password" name="password" className="inputfield" placeholder = "Enter Password"></input>
                    </li>

                    <li>
                        <input type="password" name="password" className="inputfield" placeholder = "Confirm Password"></input>
                    </li>
                    
                    <li>
                        <input type="submit" className="registerbutton" value = "Register"></input>
                        <Link to="/login" className="registerlink">Already registered? Sign in here! </Link>
                    </li>
                </ul>

                 
            </motion.form>

              
    </motion.div>
    )
}

export default Register
