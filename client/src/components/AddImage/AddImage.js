
import { useEffect, useState } from 'react'
import api from '../../services/api';

const AddImage = ({
    history,
}) => {
    const [image, setImage] = useState('')
        console.log(image);

    const submitHandler = (e) => {
        e.preventDefault()
   
        setImage({
          imageURL : e.target.imageURL.value,
        })
    }
    useEffect(()=>{
        if(!image){
            return
        }
        api.addImage(image)
        .then(res=>history.push('/'))
        .catch(err=>console.log(err))
    })

      
        return (

            <form className='form' onSubmit={submitHandler}>
                <h3>Add your Image URL</h3>
                <label htmlFor='imageURL'></label>
                <input type="text" name="imageURL" />
                <input type='submit'></input>

            </form>

        );
} 
    export default AddImage;