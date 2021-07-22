import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import {useState, useContext} from 'react';
import {motion} from 'framer-motion';
import Axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';

function Login() {

    const {setCurrentProfile} = useContext(GlobalContext);

    const [LoginUser, setLoginUser] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');

    const submitLogin = () => {
        Axios.get("http://localhost:3001/api/getlogin",  {
            params: {
                user: LoginUser, 
                password: LoginPassword,
            }
        }).then((response) => {
            
            console.log(response.data[0]);
            setCurrentProfile(response.data[0]);
        });
        
    }

    return (
        <motion.div>
            
                <div className="background">
                    <motion.div initial={{x:-2000}} animate = {{ x: -400}} exit = {{x:-2000}} className="lwall"></motion.div>
                </div>            

                <motion.form initial={{x:-700}} animate = {{ x: 0}} exit = {{x:-1700}} className = "loginform">
           
                    <ul className="userSection">
                        <img src="/logo.png" alt="logo" className="llogo"></img>

                        <li>
                            <input type="text" name="username" className="inputfield" placeholder = "Email or Username" onChange={(e) => {setLoginUser(e.target.value)}} />    
                        </li>

                        <li>
                            <input type="password" name="password" className="inputfield" placeholder = "Password" onChange={(e) => {setLoginPassword(e.target.value)}}  />
                        </li>
                        
                        <li>
                            <Link to="/profile" className="loginbutton" onClick={submitLogin}>Login</Link>
                            <Link to="/register" className="registerlink">Not registered? Click here to join! </Link>
                        </li>
                    </ul>

                </motion.form>
                  
        </motion.div>
    )
}

export default Login
