import { UncontrolledCarousel } from 'reactstrap';
import { useState, useEffect } from 'react';


import './ImageGallery.css';

import apiGallery from '../../../services/apiGallery';



const ImageGallery = ({
    token,
}) => {
    const [images, SetImages] = useState([]);

useEffect(()=>{
    apiGallery.getAllImages()
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