import { UncontrolledCarousel } from 'reactstrap';
import { useState, useEffect } from 'react';


import './ImageGallery.css';

import api from '../../../services/api';



const ImageGallery = () => {
    const [images, SetImages] = useState([]);

useEffect(()=>{
    api.getAllImages()
    .then(dataImages=>SetImages(dataImages))
    .catch(err=> console.log(err))
},[])
    return (


        <div className='container'>
            <UncontrolledCarousel className='image-style' items={images} />

        </div>


    )
}





export default ImageGallery;