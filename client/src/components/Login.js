import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import {useState} from 'react';
import {motion} from 'framer-motion';

function Login() {


    const [profileName, setProfileName] = useState('');

    return (
        <motion.div>
            
                <div className="background">
                    <motion.div initial={{x:-2000}} animate = {{ x: -400}} exit = {{x:-2000}} className="lwall"></motion.div>

                  
                </div>
            

                <motion.form initial={{x:-700}} animate = {{ x: 0}} exit = {{x:-1700}} className = "loginform">
                  
           
                    <ul className="userSection">
                        <img src="/logo.png" alt="logo" className="llogo"></img>
                        <li>
                       
                            <input type="text" name="username" className="inputfield" placeholder = "Email or Username" onChange={(e) => {setProfileName(e.target.value)}} />
                            
                        </li>
                        <li>
                         
                            <input type="password" name="password" className="inputfield" placeholder = "Password"></input>
                            
                        </li>
                        
                        <li>
                            <input type="submit" className="loginbutton" value = "Login" ></input>
                            <Link to="/register" className="registerlink">Not registered? Click here to join! </Link>
                        </li>
                    </ul>

                     
                </motion.form>

                  
        </motion.div>
    )
}

export default Login
