import {useState,useEffect} from 'react';
import api from '../../../../services/api';

const AddBarberPage = ({
    history,
}) => {
const [barber,setBarber] = useState('')

const submitHandler= (e)=>{
e.preventDefault();

setBarber({
name:e.target.name.value,
description:e.target.description.value,
imageUrl:e.target.imageUrl.value,
})

}

useEffect(()=>{
    if(!barber){
        return
    }

    api.addBarber(barber)
    .then(()=>history.push('/homePage'))
    .catch(err=>console.log(err))
},[barber])

    return (
        <form  onSubmit = {submitHandler}>
            <div className='form'>

            <h4>Add new Barber to your Team</h4>
            
            <input  type='text' name='name' placeholder='Name'></input>
        <br/>
            <input type='text' name='description' placeholder='Description'></input>
            <br/>
            <input type='text' name='imageUrl' placeholder='imageUrl'></input>
            <br/>
        <button className='btn btn-dark'>Submit</button>
            </div>
         
        </form>
    );
}

export default AddBarberPage;