import React, {useState} from 'react';
import './UploadSection.css';
import {motion} from 'framer-motion';
import axios from 'axios';
function UploadSection() {

    const [File, setFile] = useState();
    const [FileName, setFileName] = useState();
    const [uploadedFile, setUploadedFile] = useState({});

    const fileSelectedHandler = event => {
        setFile(event.target.files[0]); 
        setFileName(event.target.files[0].name);
        console.log("file set");
    };

    const fileUploadHandler = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', File);   
        
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:3001/api/uploadfile', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
            });

            const { fileName, filePath } = response.data;

            setUploadedFile({fileName, filePath});
        } catch (error) {
            if (error.response.status === 500) {
                console.log("server error");
            } else {
                console.log(error.response.data.msg);
            }
        } 
    };

    return (
        <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}}>
            <div className="background">
                <motion.div initial={{opacity:0}} animate = {{ opacity: 1}} exit = {{opacity:0}} className="hwall"></motion.div>
            </div> 
            <form onSubmit={fileUploadHandler}>
                <div>
                    <input type="file" onChange= {fileSelectedHandler} />
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            
        </motion.div>
    )
}

export default UploadSection
