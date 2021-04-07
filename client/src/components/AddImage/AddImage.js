

import {  useContext ,useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validatorsSchema from '../../utils/validatorsSchema';
import { Button } from 'reactstrap';
import apiGallery from '../../services/apiGallery';
import './AddImage.css';
import TokenContext from '../Context/TokenContext';
import notification from '../../utils/notification'

const AddImage = ({
    history,
   
}) => {
    const[notif,setNotif]=useState('')
    const [token] = useContext(TokenContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validatorsSchema.addImage)
    })

    const submitForm = ((image) => {

        apiGallery.addImage(image, token)
            .then(res =>{
               setNotif('image is save')
               setTimeout(()=>{
                    history.push('/')
               },2000)
             })
            .catch(err => console.log(err))
    })


    return (
        <>
      
            <form className='form' onSubmit={handleSubmit(submitForm)}>
            {notification(notif)}
                <div className='form-details'>
                    <h3>-- Add your Image --</h3>
                    <label htmlFor='imageUrl'></label>
                    <input type="text" name="imageUrl" placeholder='add image url' ref={register} />
                    <p>{errors.imageUrl?.message}</p>
                    <Button className='btn btn-dark'>Submit</Button>
                </div>
            </form>
        </>


    );
}
export default AddImage;