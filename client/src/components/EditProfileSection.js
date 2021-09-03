import React from 'react';
import './EditProfileSection.css'
import {motion} from 'framer-motion';

function EditProfileSection() {
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 

            <form className="edit-profile-form" >
                <input type ="text" />
                <button >Submit </button>
            </form>
            
        </motion.div>
    )
}

export default EditProfileSection
