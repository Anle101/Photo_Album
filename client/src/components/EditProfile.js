import React from 'react';
import './EditProfile.css';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

function EditProfile() {
    return (
        <motion.div className = "edit-button" whileHover = {{
            scale: 1.3,
        }} >

            <Link to = "/editprofile" className="tooltip"> 
                <motion.i className="fas fa-address-card camera" whileHover = {{
                scale : 1.1,
                rotate: -30,
                }}></motion.i>
                <span className="tooltiptext">Edit your profile!</span>
            </Link>
          
        </motion.div>
    )
}

export default EditProfile
