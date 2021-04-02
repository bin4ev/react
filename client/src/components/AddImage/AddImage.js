
import { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import apiGallery from '../../services/apiGallery';
import './AddImage.css';

const AddImage = ({
    history,
    token,
}) => {
    const [image, setImage] = useState('')
     

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
        apiGallery.addImage(image,token)
        .then(res=>history.push('/'))
        .catch(err=>console.log(err))
    })

      
        return (
            <>
           
            <form className='form' onSubmit={submitHandler}>
               
                <div className='form-details'>
                <h3>-- Add your Image --</h3>
                <label htmlFor='imageURL'></label>
                <input type="text" name="imageURL" placeholder='add image url'/>
                <Button className='btn btn-dark'>Submit</Button>
                </div>
             

            </form>
            </>
           

        );
} 
    export default AddImage;