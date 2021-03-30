import { useState, useEffect } from 'react';
import Form  from '../Form/Form';
import api from '../../../../services/api';
import './AddNewBarberPage.css'

const AddBarberPage = ({
    history,
}) => {
    const [barber, setBarber] = useState('')

    const submitHandler = (barber) => {
      
      
    }

    useEffect(() => {
        if (!barber) {
            return
        }

        api.addBarber(barber)
            .then(() => history.push('/homePage'))
            .catch(err => console.log(err))
    }, [barber])

    return (
        <div className='wrapper'>
        <h4 className='head'>Add new Barber</h4>
            <Form 
            submit={submitHandler} 
            setBarberValue={submitHandler}
            />
          </div>
    );
}

export default AddBarberPage;