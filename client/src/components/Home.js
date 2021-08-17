import React,{useEffect, useState, useContext} from 'react';
import {motion} from 'framer-motion';
import {GlobalContext} from '../context/GlobalContext';
import './Home.css';
import Feed from './Feed';
import Axios from 'axios';
function Home() {

    const [FeedItems, setFeedItems] = useState([]);
    const [Retrieval, setRetrieval] = useState(false);

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
                console.log(response.data[1]);
                setFeedItems(response.data); 

                console.log(FeedItems[0]);
                console.log(FeedItems[1]);
                //setFeedItems({imgPath:response.data[0].image_dir, caption: response.data[0].picture_caption});
                setRetrieval(true);
            }).catch((error) => {
                console.log(error);
           
            });
        }
        console.log("The current profile is " + CurrentProfile.email);
      }, []);
    //Assumes user is already logged in
    
    function feedDisplay() { 
        return (
            FeedItems.map ((feedItem) => ( <Feed feedItem = {{imgPath:feedItem.image_dir, caption: feedItem.picture_caption}} />))
        );
    }
      
    
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 
            {Retrieval &&
           
           
            <>
                <feedDisplay />
                <Feed feedItem = {{imgPath:FeedItems[0].image_dir, caption: FeedItems[0].picture_caption}} />
                <Feed feedItem = {{imgPath:FeedItems[1].image_dir, caption: FeedItems[1].picture_caption}} />
            
            </>
            }
           
        </motion.div>
    )
}

export default Home
