import React from 'react';
import './Upload.css';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
function Upload() {
    return (
        <motion.div className = "upload-button" whileHover = {{
            scale: 1.3,
        }} >

            <Link to = "/upload" className="tooltip"> 
                <motion.i className="fas fa-camera camera" whileHover = {{
                scale : 1.1,
                rotate: -30,
                }}></motion.i>
                <span className="tooltiptext">Create a memory!</span>
            </Link>
          
        </motion.div>
    )
}

export default Upload
