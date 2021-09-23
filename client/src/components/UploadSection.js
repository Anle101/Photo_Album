import React, {useState,useContext} from 'react';
import './UploadSection.css';
import {motion} from 'framer-motion';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
function UploadSection() {

    const [File, setFile] = useState();
    const [Caption, setCaption] = useState();
    const [FileName, setFileName] = useState();
    const [uploadedFile, setUploadedFile] = useState({});
    const [PreviewFile, setPreviewFile] = useState();
    const {CurrentProfile} = useContext(GlobalContext);
    const fileSelectedHandler = event => {
        setFile(event.target.files[0]); 
        setFileName(event.target.files[0].name);
        setPreviewFile (URL.createObjectURL(event.target.files[0]));
        console.log("file set");
    };

    const fileUploadHandler = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', File);   
        formData.append('caption', Caption);
        formData.append('poster', CurrentProfile.user_id);
        console.log(formData);
        try {
            const response = await axios.post('https://photo-album-teacup.herokuapp.com/api/uploadfile', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
            });

            const { fileName, filePath } = response.data;
            console.log(fileName + " " + filePath);
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
            <form onSubmit={fileUploadHandler} >
                <div className="upload-form">

                    <h1 className="upload-message">Upload a memory!</h1>

                    <motion.div className="upload" whileHover= {
                        {
                        scale: 1.1,
                        }
                    }>
                        <div className="upload-content">
                            <input accept="image/*" type="file" onChange= {fileSelectedHandler}  className="upload-imagebutton"/>
                            <img src= {PreviewFile} className="upload-image"></img>
                            <input type="text" onChange= {(e) => {setCaption(e.target.value);}} className = "upload-caption"/>
                        </div>
                    </motion.div>
                    <input type="submit" value="Submit" className="upload-imagebutton"/>
                </div>
            </form>

          
            
        </motion.div>
    )
}

export default UploadSection
