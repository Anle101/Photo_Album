import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GlobalContext } from '../context/GlobalContext';
import Axios from 'axios';

 function Navbar() {

    const {CurrentProfile} = useContext(GlobalContext);
    const [value, setValue] = useState(0); // integer state
    const [Retrieval, setRetrieval] = useState(false);
    const ForceUpdate = () => {
        localStorage.clear();
        window.location.reload();
        setValue(value => value + 1); // update the state to force render
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            const userConfirmation = JSON.parse(loggedInUser);
            
            Axios.get("https://photo-album-teacup.herokuapp.com/api/getcontent",  {
                params: {
                    user: userConfirmation.email, 
                }
            }).then((response) => { //if successful

               
                setRetrieval(true);
            }).catch((error) => {
                console.log(error);
           
            });
        }
       
      }, []);
    
     const [click, setClick] = useState(false);
     const [button, setButton] = useState(true);

     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);

     const showButton = () => {
         if (window.innerWidth <= 960) { 
             setButton(false);
         } else { 
             setButton(true);
         }
     }

     const toggleHome = () => {
     
         closeMobileMenu();
     }

     const toggleAboutme = () => {
       
        closeMobileMenu();
     }

     const toggleSkill = () => {
     
        closeMobileMenu();
     }

     
     const toggleExperience = () => {
    
        closeMobileMenu();
    }

     const toggleContact = () => {
        
         closeMobileMenu();
     }

     useEffect(() => {showButton();} , []);
     window.addEventListener('resize', showButton);

     return (
         <> 
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo" onClick={toggleHome}>
                    <i class="far fa-bookmark"></i> Photo_Album  
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {!Retrieval && 
                    <>
                        <li className='nav-item'>
                                <Link to="/register" className='nav-links' onClick={toggleExperience}>
                                    Register
                                </Link>
                        </li>


                        <li className='nav-item'>
                                <Link to="/login" className='nav-links' onClick={toggleContact}>
                                    Login
                                </Link>
                        </li>
                      
                    </>
                    }

                    {Retrieval && 
                    <>
                        <li className='user-message'>
                            <img src={(CurrentProfile.profile_picture)? CurrentProfile.profile_picture : "/images/blank.jpg"} className="user-image"></img> 
                            <p>{CurrentProfile.name}</p>
                        </li>
                        <li className='nav-item'>
                                <Link to="/home" className='nav-links' onClick={toggleAboutme}>
                                    Home
                                </Link>
                        </li>
                        <li className='nav-item'>
                                <Link to="/profile" className='nav-links' onClick={toggleAboutme}>
                                    Profile
                                </Link>
                        </li>
                        
                        <li className='nav-item'>
                                <Link to="/home" className='nav-links' onClick={ForceUpdate}>
                                    Logout
                                </Link>
                        </li>
                    </>
                    }
                    </ul>
                   {/* {button && <Button buttonStyle='btn--outline'> Test Button </Button>}*/}
            
                </div>
            </nav> 
         </>
     )
 }
 
 export default Navbar
 