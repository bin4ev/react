
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import apiGallery from '../../services/apiGallery';

const MyHairStylesList = ({
    token,
 
}) => {
    const [images, SetImages] = useState([]);

    useEffect(() => {
        apiGallery.getFilterImages(token)
            .then(dataImages => SetImages(dataImages))
            .catch(err => console.log(err))
    }, [])


    return (

        <div className='container'>
            <div class="row">
                {images.map(x => (<div key={x._id} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <Link to={`/myHairstyles/image/${x._id}`}> <img
                        src={x.src}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt=""
                    /></Link>

                </div>))}


            </div>

        </div>
    )
}

export default MyHairStylesList;