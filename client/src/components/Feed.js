import React from 'react';
import './Feed.css';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
function Feed({feedItem}) {
    console.log(feedItem.imgPath);
    
    return (
        <div className="entire-feed">
            <div className="main-content">
                <motion.div className="feed" initial={{rotateZ:180, opacity:0, scale:0}} animate = {{ rotateZ: 360, opacity:1, transition: {type:'spring', duration: 1}, scale:1}} exit = {{rotateZ:0, opacity:0}} whileHover= {
                {
                    scale: 1.1,
                }
                }
          
                >
                    <div className="feed-content">
                        <img src={feedItem.imgPath} className="feed-image"></img>
                        <p>{feedItem.caption}</p>
                    </div>
                </motion.div>
                <motion.div className="post-content" whileHover= {
                {
                    scale: 1.1,
                }
                }>
                    <img src={(feedItem.profile_picture)? feedItem.profile_picture : "/images/blank.jpg"} className="post-image"></img>
                    <p className="uploader-info">Memory by : {feedItem.name}</p>
                </motion.div>
            </div>
        </div>
       
    )
}

export default Feed

Feed.propTypes = {
    feedItem: PropTypes.func.isRequired
}