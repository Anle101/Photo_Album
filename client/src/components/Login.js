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
    const {token} = useContext(GlobalContext);

    const [LoginUser, setLoginUser] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');
    const history = useHistory();
    
    
    const loginCred = async e => {
        e.preventDefault()
        if (token) {
            alert("A user is already logged in!");
        }
        else {
            Axios.get("http://localhost:3001/api/getlogin",  {
                params: {
                    user: LoginUser, 
                    password: LoginPassword,
                }
            }).then((response) => { //if successful
                if (!response.data.user[0]) {
                    alert('Incorrect Username/Password!');
                }
                else {
                    console.log(response.data.user[0]);
                    setToken(response.data.token);
                    setCurrentProfile(response.data.user[0]);
                    console.log(response.data);
                    console.log(CurrentProfile);
                    localStorage.setItem('user', JSON.stringify(response.data.user[0]));
                 
                }
                
                
            }).catch((error) => {
                console.log(error);
           
            });
        }
      
       
    }

        return (
            <motion.div>
                
                    <div className="background">
                        <motion.div initial={{x:-2000}} animate = {{ x: -400}} exit = {{x:-2000}} className="lwall"></motion.div>
                    </div>            
                    {token &&
                        <>
                            <h1 className = "login-message">You are logged in!</h1>
                            <Link to ="/profile" className="loginbutton redirectbutton"> Profile </Link>
                            <Link to ="/home" className="loginbutton redirectbutton2"> Home </Link>
                        </>
                    }
                    {!token &&
                    <>
                    <motion.form initial={{x:0}} animate = {{ x: 1200}} exit = {{x:0}} className = "loginform" onSubmit = {loginCred}>
               
                        <ul className="userSection">
                            <i className="far fa-bookmark llogo"></i> 
                            <p className="llogo-font">Photo_Album</p>
                            
                            <li>
                                <input type="text" name="username" className="inputfield" placeholder = "Email or Username" onChange={(e) => {setLoginUser(e.target.value)}} />    
                            </li>

                            <li>
                                <input type="password" name="password" className="inputfield" placeholder = "Password" onChange={(e) => {setLoginPassword(e.target.value)}}  />
                            </li>
                            
                            <li>
                                <input type="submit" className="loginbutton" value="Login"></input>
                                <Link to="/register" className="registerlink">Not registered? Click here to join! </Link>
                            </li>
                        </ul>

                    </motion.form>
                    </>
                    }
                   
                      
            </motion.div>
        )
    
  
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}