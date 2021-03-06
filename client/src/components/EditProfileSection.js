import React, {useState, useContext} from 'react';
import './EditProfileSection.css'
import {motion} from 'framer-motion';
import axios from 'axios';
import {GlobalContext} from '../context/GlobalContext';
function EditProfileSection() {
    const [File, setFile] = useState();
    const [Name, setName] = useState();
    const [City, setCity] = useState();
    const [Province, setProvince] = useState();
    const [Details, setDetails] = useState();
    const [FileName, setFileName] = useState();
    const [FileSelected, setFileSelected ] = useState(false);
    const [PreviewFile, setPreviewFile] = useState();
    const {CurrentProfile} = useContext(GlobalContext);
    const fileSelectedHandler = event => {
        setFileSelected(true);
        setFile(event.target.files[0]); 
        setFileName(event.target.files[0].name);
        setPreviewFile (URL.createObjectURL(event.target.files[0]));
        console.log("file set");
    };

    const fileUploadHandler = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', File);   
        formData.append('name', Name);
        formData.append('city', City);
        formData.append('province', Province);
        formData.append('details', Details);
        formData.append('poster', CurrentProfile.user_id);
        console.log(formData);
        try {
            const response = await axios.post('https://photo-album-teacup.herokuapp.com/api/editprofile', formData, {
               headers: {
                   'Content-Type': 'multipart/form-data'
               }
            });

            const { fileName, filePath } = response.data;

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
            <form onSubmit={fileUploadHandler} className="edit-form">
                    <h1 className="edit-message">Edit Profile</h1>

                    <motion.div className="edit" whileHover= {
                        {
                        scale: 1.03,
                        }
                    }>     
                        <ul className="edit-content">
                            <li className="line">
                                <label className = "form-label">Name: </label>
                                <input type="text" onChange= {(e) => {setName(e.target.value);}} className = "edit-caption" placeholder="hi"/>
                            </li>
                           
                            <li className="line">
                                <label className = "form-label">City: </label>
                                <input type="text" onChange= {(e) => {setCity(e.target.value);}} className = "edit-caption"/>
                            </li>
                            <li className="line">
                                <label className = "form-label">Province: </label>
                                <input type="text" onChange= {(e) => {setProvince(e.target.value);}} className = "edit-caption"/>
                            </li>
                            <li className="line">
                                <label className = "form-label">Details: </label>
                                <textarea  onChange= {(e) => {setDetails(e.target.value);}} className = "edit-caption"/>
                            </li>
                            <li className="line">
                                <label className = "form-label">Profile Picture: </label>
                            </li>

                            <li className="line">
                                <input accept="image/*" type="file" onChange= {fileSelectedHandler}  className="upload-imagebutton"/>
                            </li>

                            <li className="line">
                                {FileSelected && 
                                <>
                                    <img src= {PreviewFile} className="preview-profile"></img>
                                </>
                                }                          
                            </li>
                        </ul>
                        
                    </motion.div>
                    <input type="submit" value="Submit" className="edit-imagebutton"/>
            </form>

          
            
        </motion.div>
    )
}

export default EditProfileSection
