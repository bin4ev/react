import { useState,useContext } from 'react';

import Form from '../Form/Form';
import api from '../../../../services/apiStaff';
import './AddBarberPage.css';
import  TokenContext from '../../../Context/TokenContext';
const AddBarberPage = ({
    history,
  
}) => {
    const [token]=useContext(TokenContext);
    const [barber, setBarber] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        if (!barber) {
            return
        }

        api.addBarber(barber,token)
            .then((res) => history.push('/homePage'))
            .catch(err => console.log(err))
    }
   
    return (
         <div className='wrapper'>
        <h4 className='head'>Add new Barber</h4>
        <Form
            submit={submitHandler}
            setBarberValue={setBarber}
        />
    </div>

        
    );
}

export default AddBarberPage;