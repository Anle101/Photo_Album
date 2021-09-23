import React,{useEffect, useState, useContext} from 'react';
import {motion} from 'framer-motion';
import {GlobalContext} from '../context/GlobalContext';
import './Home.css';
import {Link} from 'react-router-dom';
import Feed from './Feed';
import Axios from 'axios';
import Upload from './Upload';
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
            Axios.get("https://photo-album-teacup.herokuapp.com/api/getcontent",  {
                params: {
                    user: userConfirmation.email, 
                }
            }).then((response) => { //if successful
                console.log(response.data.feed);
                setFeedItems(response.data.feed); 
               
               
                console.log(FeedItems[0]);
                console.log(FeedItems);
                //setFeedItems({imgPath:response.data[0].image_dir, caption: response.data[0].picture_caption});
                setRetrieval(true);
            }).catch((error) => {
                console.log(error);
           
            });
        }
        console.log("The current profile is " + CurrentProfile.email);
      }, []);
    //Assumes user is already logged in
    
    const FeedDisplay = ({feedItems})  => (
        <div>
            {feedItems.map (feedItem => (<Feed feedItem = {{imgPath:feedItem.image_dir, caption: feedItem.picture_caption, name: feedItem.name, profile_picture: feedItem.profile_picture}}/>))}  
        </div>
    );
      
    
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 
            {Retrieval &&
           
           
            <>
                
               <FeedDisplay feedItems= {FeedItems} />
               <Upload />
            </>
            }

            {!Retrieval &&
            <>
           
                <div className="login-warning"> 
                    <i class="fas fa-heart-broken" style={{fontSize:300, opacity: 0.1}}></i>
                    <p>You need to log in the capture some memories!</p> 
                    <Link to="/login"> Login here! </Link>
                </div>
            </>
            }
           
        </motion.div>
    )
}

export default Home
