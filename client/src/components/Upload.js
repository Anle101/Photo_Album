import React from 'react';
import './Upload.css';
import {motion} from 'framer-motion';
function Upload() {
    return (
        <motion.div className = "upload-button" whileHover = {{
            scale: 1.3,
        }} >
            <div class="tooltip"> 
                <motion.i class="fas fa-camera" whileHover = {{
            scale : 1.1,
            rotate: -30,
        }}></motion.i>
                <span class="tooltiptext">Create a memory!</span>
            </div>
          
        </motion.div>
    )
}

export default Upload
