import React from 'react';
import './Feed.css';
import PropTypes from 'prop-types';
function Feed({feedItem}) {
    console.log(feedItem.imgPath);
    
    return (
        <div className="entire-feed">
            <div className="main-content">
                <div className="feed">
                    <div className="feed-content">
                        <img src={feedItem.imgPath} className="feed-image"></img>
                        <p>{feedItem.caption}</p>
                    </div>
                </div>
                <div className="post-content">
                <img src={feedItem.imgPath} className="post-image"></img>
               <p className="uploader-info">Memory by :</p>
                </div>
            </div>
        </div>
       
    )
}

export default Feed

Feed.propTypes = {
    feedItem: PropTypes.func.isRequired
}