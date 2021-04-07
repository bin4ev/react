import { useState,useContext } from 'react';

import Form from '../Form/Form';
import api from '../../../../services/apiStaff';
import './AddBarberPage.css';
import  TokenContext from '../../../Context/TokenContext';
import notification from '../../../../utils/notification'
const AddBarberPage = ({
    history,
  
}) => {
    const[notif,setNotif]=useState('')
    const [token]=useContext(TokenContext);
    const [barber, setBarber] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        if (!barber) {
            return
        }

        api.addBarber(barber,token)
            .then((res) =>{
                setNotif('You new Barber is added!')
                setTimeout(()=>{
                     history.push('/homePage')
                },2000)
            })
            .catch(err => console.log(err))
    }
   
    return (

        
         <div className='wrapper'>
              {notification(notif)}
        <h4 className='head'>Add new Barber</h4>
       
        <Form
       
            submit={submitHandler}
            setBarberValue={setBarber}
        />
    </div>

        
    );
}

export default AddBarberPage;