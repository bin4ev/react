import { UncontrolledCarousel } from 'reactstrap';

import './ImageGallery.css';
import getImages from '../../../images/getImages';


const ImageGallery = () =>
    <div className='container'>
        <UncontrolledCarousel className='image-style' items={getImages()} />

    </div>

export default ImageGallery;