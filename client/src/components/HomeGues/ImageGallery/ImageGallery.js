import {useState,useEffect} from 'react';


import './ImageGallery.css';
import getImages from '../../../images/getImages';

function ImageGallery() {

    const allImages = getImages();
    const [images, setImage] = useState([]);

 

useEffect(()=>{
  setImage(prevState=>prevState=allImages) 
})

    return(
        <div className="image-gallery">
                     <button  type = "button"className="btn btn-light" >prev</button>
                     {images.map(x=> <img src={x.src}/>)}
                    
           
            <button  type = "button"className="btn btn-light">next</button>
        </div>
    )
}
export default ImageGallery;