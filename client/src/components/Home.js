import React,{useState, useContext} from 'react';
import {motion} from 'framer-motion';
import './Home.css';
function Home() {
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 
        </motion.div>
    )
}

export default Home
