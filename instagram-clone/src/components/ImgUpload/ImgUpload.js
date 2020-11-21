import React, { useState } from 'react';
import './ImgUpload.scss';

function ImgUpload() {
    const [caption, setCaption] = useState('');
    const [img, setImg] = useState(null);
    const [progress, setProgress] = useState(0);

    return (
        <div className="ImgUpload">
            <input type="text" placeholder="Enter a caption" onChange={e => setCaption(e.target.value)} value={caption} />
            <input type="file" onChange={hangleChange} />
            <Button onClick ={hangleUpload}>
                Upload    
            </Button> 
        </div>
    )
}

export default ImgUpload;
