import React, {useEffect, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Profile.css';

import { GlobalContext } from '../context/GlobalContext';

function Profile() {

    const {CurrentProfile} = useContext(GlobalContext);
    const {setCurrentProfile} = useContext(GlobalContext);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            const userConfirmation = JSON.parse(loggedInUser);
            setCurrentProfile(userConfirmation);
        }
        console.log(CurrentProfile);
      }, []);

    console.log(CurrentProfile);
    return (
        <motion.div initial={{y:-600}} animate = {{ y: 0}} exit = {{y:-600}} className="profile">

            <div className="background">
                <motion.div className="pwall"></motion.div>
            </div>   
           <motion.div className="user-info">
                <div className="top-info">
                    <img src={(CurrentProfile.profile_picture!= null)? process.env.PUBLIC_URL + CurrentProfile.profile_picture:  process.env.PUBLIC_URL + "images/blank.jpg"} alt="Profile Picture" className = "profile-picture"></img>
                    <div className = "basic-info">
                        <h1 className = "user-attribute"> {(CurrentProfile.name != null)? CurrentProfile.name : "N/A"}</h1>
                        <p className = "user-attribute">{(CurrentProfile.email != null)? CurrentProfile.email : "N/A"}</p>
                        <hr />
                        <h3 className = "user-attribute">City: {(CurrentProfile.city != null)? CurrentProfile.city : "N/A"}</h3>
                        <h3 className = "user-attribute">Province: {(CurrentProfile.province!= null)? CurrentProfile.province : "N/A"}</h3>
                        
                    </div>
                </div>
                
                <div className = "bottom-info">
                <hr />
                    Details: {CurrentProfile.details}
                </div>
           </motion.div>
         
        </motion.div>
    )
}

export default Profile
