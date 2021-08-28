import React, {useState} from 'react';
import './UploadSection.css';
import {motion} from 'framer-motion';
import axios from 'axios';
function UploadSection() {

    const [File, setFile] = useState();

    const fileSelectedHandler = event => {
        setFile(event.target.files[0]); 
    }

    const fileUploadHandler = event => {
        const fd = new FormData();
        fd.append('image', File, File.name);    
        axios.post("http://localhost:3001/api/uploadfile", fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload progress: ' + ((progressEvent.loaded / progressEvent.total)*100) + '%');
            }
        })

        .then (res => {
            console.log(res);
        });
    }
    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 

            <input type="file" onChange= {fileSelectedHandler} />
            <button onClick={fileUploadHandler} >Submit </button>
        </motion.div>
    )
}

export default UploadSection
