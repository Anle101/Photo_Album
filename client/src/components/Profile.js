import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
function Profile() {
    return (
        <motion.div initial={{opacity:0}} animate={{ opacity: 1}} exit = {{opacity:0}}>
            <Link to="/login">Click to switch</Link>
        </motion.div>
    )
}

export default Profile
