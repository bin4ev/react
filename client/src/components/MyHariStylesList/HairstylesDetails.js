
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react'

import api from '../../services/apiGallery';


const HairstylesDetails = ({
    match,
    token,
}) => {
    const [image, setImage] = useState('')
    console.log(match);

useEffect(()=>{
    api.getOneImage(match.params.id)
    .then(data=>setImage(data))
    .catch(err=>console.log(err))
},[])

    const deleteImage = () => {
        api.deleteImage(image._id, token)
            .then()
            .catch(err => console.log(err))
    }
    console.log(image);

    return (

        <div className='card-details'>

            <img src={image.src} alt='my image' />
            <div className='card-text'>
                {/*     <Link to={`//myHairstyles/image/delete:id/${barber._id}`}><Button>Delete</Button></Link> */}
                <Button onClick={deleteImage}>Delete</Button>
            </div>
        </div>
    )
}





export default HairstylesDetails;