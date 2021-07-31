import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Login.css';
import {useState, useContext} from 'react';
import {motion} from 'framer-motion';
import Axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import PropTypes from 'prop-types';

function Login({setToken}) {

    const {setCurrentProfile} = useContext(GlobalContext);
    const {CurrentProfile} = useContext(GlobalContext);

    const [LoginUser, setLoginUser] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const history = useHistory();

    
    const loginCred = async e => {
        e.preventDefault()
        Axios.get("http://localhost:3001/api/getlogin",  {
            params: {
                user: LoginUser, 
                password: LoginPassword,
            }
        }).then((response) => { //if successful
            console.log(response.data.user[0]);
            setToken(response.data.token);
            setCurrentProfile(response.data.user[0]);
            console.log(response.data);
            console.log(CurrentProfile);
            localStorage.setItem('user', JSON.stringify(response.data.user[0]));
            
        }).catch((error) => {
            console.log(error);
       
        });
       
    }

        return (
            <motion.div>
                
                    <div className="background">
                        <motion.div initial={{x:-2000}} animate = {{ x: -400}} exit = {{x:-2000}} className="lwall"></motion.div>
                    </div>            
    
                    <motion.form initial={{x:-700}} animate = {{ x: 0}} exit = {{x:-1700}} className = "loginform" onSubmit = {loginCred}>
               
                        <ul className="userSection">
                            <img src="/logo.png" alt="logo" className="llogo"></img>
    
                            <li>
                                <input type="text" name="username" className="inputfield" placeholder = "Email or Username" onChange={(e) => {setLoginUser(e.target.value)}} />    
                            </li>
    
                            <li>
                                <input type="password" name="password" className="inputfield" placeholder = "Password" onChange={(e) => {setLoginPassword(e.target.value)}}  />
                            </li>
                            
                            <li>
                                <input type="submit" to="/profile" className="loginbutton" value="Login"></input>
                                <Link to="/register" className="registerlink">Not registered? Click here to join! </Link>
                            </li>
                        </ul>
    
                    </motion.form>
                      
            </motion.div>
        )
    
  
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}