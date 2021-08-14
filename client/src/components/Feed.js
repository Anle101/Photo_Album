import React from 'react';
import './Feed.css';
import PropTypes from 'prop-types';
function Feed({feedItem}) {

    
    return (
        <div className="main-content">
            <div className="feed">
                <div className="feed-content">
                    <img src="/images/blank.jpg" className="feed-image"></img>
                    <p>Tempor minim labore non tempor laboris duis culpa exercitation qui nulla elit. Officia velit adipisicing ipsum enim amet ullamco. Culpa id laboris laboris laborum eiusmod do exercitation occaecat. Minim aute consectetur cupidatat reprehenderit non laborum dolor aliqua cupidatat velit.</p>
                </div>
            </div>
        </div>
    )
}

export default Feed

Feed.propTypes = {
    feedItem: PropTypes.func.isRequired
}