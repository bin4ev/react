import{useState,useEffect} from 'react';

import './AppointmentForm.css'
import apiAppointments from '../../../services/apiAppointmets';
import useGetAllStaff from '../../../hook/useFethtAllStaff';



function AppointmentForm({
    history,
}){
const [appointment,setApoitment]= useState('');
const [allStaff]=useGetAllStaff('http://localhost:5000/staff/all') 

useEffect(()=>{
    if(!appointment){
        return
    }
    apiAppointments.saveAppointment(appointment)
    .then(res=>history.push('/homePage'))
    .catch(err=>console.log(err))
},[appointment])

const submitHandler=(e)=>{
e.preventDefault();

setApoitment({
    [e.target.name.name]:e.target.name.value,
    [e.target.phone.name]:e.target.phone.value,
    [e.target.service.name]:e.target.service.value,
    [e.target.barber.name]:e.target.barber.value,
})  
}

    return (
        <div className='book-wrapper'>
              <h4>Please book your appointment</h4>
            <form onSubmit={submitHandler} className='form'>
                <div >
                  
                    <input type="text" name="name" placeholder='Enter your name:' />
                    <br />
                    <input type="tel" id="phone" name="phone" placeholder='Enter your phone number:' />
                    <br />
                    <label for="service">Service</label>
                    <br/>
                    <select name= 'service'>
                    <option value="SkinFade">Skin Fade</option>
                    <option value="DryCut">Dry Cut</option>
                    <option value="Beard">Beard</option>
                    </select>
                    <br/>
                    <label for="barbers">Barbers</label>
                    <br/>
                    <select name= 'barber'>
                        {allStaff.map(x=> <option key = {x._id} value={x.name}>{x.name}</option>)}
                   
                    </select>
                </div>
                <input type="submit" value="book" />
            </form>
        </div>

    )

}
export default AppointmentForm;