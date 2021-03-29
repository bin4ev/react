
import { useEffect, useState } from 'react'
import { Button } from 'reactstrap';
import api from '../../services/api';
import './AddImage.css';

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