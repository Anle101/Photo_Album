import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login() {
    return (
        <div>
                
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

                  
        </div>
    )
}

export default Login
