import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import {motion} from 'framer-motion';
function Login() {
    return (
        <motion.div initial={{opacity:0}} animate={{ opacity: 1}} exit = {{opacity:0}}>
            
                <div className="background">
                    <motion.div initial={{x:-700}} animate = {{ x: -200}} exit = {{scaleX:0}} className="wall"></motion.div>
                    <motion.div initial={{x:-700}} animate = {{ x: 100}} exit = {{scaleX:0, scaleY:0}} className="circle"></motion.div>
                  
                </div>
            

                <form>
                  
           
                    <ul className="userSection">
                        <img src="/logo.png" alt="logo" className="logo"></img>
                        <li>
                       
                            <input type="text" name="username" className="inputfield" placeholder = "Email or Username"></input>
                            
                        </li>
                        <li>
                         
                            <input type="password" name="password" className="inputfield" placeholder = "Password"></input>
                            
                        </li>
                        
                        <li>
                            <input type="submit" className="loginbutton"></input>
                            <Link to="/profile" className="registerlink">Not registered? Click here to join! </Link>
                        </li>
                    </ul>

                     
                </form>

                  
        </motion.div>
    )
}

export default Login
