
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validatorsSchema from '../../utils/validatorsSchema';
import { Button } from 'reactstrap';
import apiGallery from '../../services/apiGallery';
import './AddImage.css';

const AddImage = ({
    history,
    token,
}) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validatorsSchema.addImage)
    })
    const [image, setImage] = useState('')
     

 /*    const submitHandler = (e) => {
        e.preventDefault()
   
        setImage({
          imageURL : e.target.imageURL.value,
        })
    } */
    const submitForm=((image)=>{
      
        apiGallery.addImage(image,token)
        .then(res=>history.push('/'))
        .catch(err=>console.log(err))
    })

      
        return (
            <>
           
            <form className='form' onSubmit={handleSubmit(submitForm)}>
               
                <div className='form-details'>
                <h3>-- Add your Image --</h3>
                <label htmlFor='imageUrl'></label>
                <input type="text" name="imageUrl" placeholder='add image url' ref={register}/>
                <p>{errors.imageUrl?.message}</p>
                <Button className='btn btn-dark'>Submit</Button>
                </div>
             

            </form>
            </>
           

        );
} 
    export default AddImage;