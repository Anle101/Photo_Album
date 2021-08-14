import React,{useEffect, useState, useContext} from 'react';
import {motion} from 'framer-motion';
import {GlobalContext} from '../context/GlobalContext';
import './Home.css';
import Feed from './Feed';
import Axios from 'axios';
function Home() {

    const [FeedItems, setFeedItems] = useState({});

    const {CurrentProfile} = useContext(GlobalContext);
    const {setCurrentProfile} = useContext(GlobalContext);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        if (loggedInUser) {
            const userConfirmation = JSON.parse(loggedInUser);
            setCurrentProfile(userConfirmation);
            console.log(userConfirmation);
            Axios.get("http://localhost:3001/api/getcontent",  {
                params: {
                    user: userConfirmation.email, 
                }
            }).then((response) => { //if successful
                console.log("The response is " + response);
              //  setFeedItems({imgPath:response.data.image_dir, caption: response.data.picture_caption});
                
            }).catch((error) => {
                console.log(error);
           
            });
        }
        console.log("The current profile is " + CurrentProfile.email);
      }, []);
    //Assumes user is already logged in
    
      
    
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 


            <Feed  feedItem = {FeedItems}/>
        </motion.div>
    )
}

export default Home
