import React, { useState } from 'react';
import './ImgUpload.scss';
import { Button } from '@material-ui/core';
import { db, storage } from '../../firebase';
import firebase from 'firebase';

function ImgUpload({ username }) {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        // get the first file you select
        if(e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        // putting img that you select into this ref
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on("state_changed", 
            (snapshot) => {
                // to visually show a progress bar
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            }, 
            (e) => {
                console.log(e);
                alert(e.message);
            },
            // getting a downloadLink
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imgUrl: url,
                            username: username
                        });

                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    });
            }
        )
    };

    return (
        <div className="imgup">
            <progress className="imgup__progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption" onChange={e => setCaption(e.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick ={handleUpload}>
                Upload    
            </Button> 
        </div>
    )
}

export default ImgUpload;
