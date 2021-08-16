import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

 function Navbar() {

    
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
                     <img src ="/logo.png" className = "logo"/>   teaCup  
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/profile" className='nav-links' onClick={toggleAboutme}>
                                Profile
                            </Link>
                         </li>
                       
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
                    </ul>
                   {/* {button && <Button buttonStyle='btn--outline'> Test Button </Button>}*/}
            
                </div>
            </nav> 
         </>
     )
 }
 
 export default Navbar
 