import React, {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';

function Profile() {

    const CurrentProfile = useContext(GlobalContext);

    console.log(CurrentProfile);
    return (
        <motion.div initial={{opacity:0}} animate={{ opacity: 1}} exit = {{opacity:0}}>
           <p>{CurrentProfile.email}</p>
            <Link to="/login">Click to switch</Link>
        </motion.div>
    )
}

export default Profile
