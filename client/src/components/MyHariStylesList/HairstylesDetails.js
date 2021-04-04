
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import api from '../../services/apiGallery';


const HairstylesDetails = ({
    match,
    token,
history,
}) => {
    const [image, setImage] = useState('')

    const id = match.params.id
    useEffect(() => {
        api.getOneImage(id)
            .then(data => setImage(data))
            .catch(err => console.log(err))
    }, [])

    const deleteImage = () => {
        api.deleteImage(image._id, token)
            .then(()=>history.push('/myHairstyles'))
            .catch(err => console.log(err))
    }
    console.log(image);

    return (

        <div className='card-details'>

            <img src={image.src} alt='my image' />
            <div className='card-text'>
               
                <Button onClick={deleteImage}>Delete</Button>
            </div>
        </div>
    )
}


export default HairstylesDetails;