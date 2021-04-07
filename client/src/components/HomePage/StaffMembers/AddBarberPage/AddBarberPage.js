import { useState, useContext } from 'react';

import Form from '../Form/Form';
import api from '../../../../services/apiStaff';
import './AddBarberPage.css';
import TokenContext from '../../../Context/TokenContext';


const AddBarberPage = ({
    history,

}) => {
    const [notif, setNotif] = useState('');
    const [token] = useContext(TokenContext);
    const [barber, setBarber] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        if (!barber) {
            return
        }

        api.addBarber(barber, token)
            .then((res) => {
                setNotif('Your new barber is added!')
                setTimeout(() => {
                    history.push('/homePage')
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='wrapper'>
            <h4 className='head'>Add new Barber</h4>
            <Form
                notif={notif}
                submit={submitHandler}
                setBarberValue={setBarber}
            />
        </div>


    );
}

export default AddBarberPage;