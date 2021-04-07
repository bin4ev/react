import { useState, useEffect,useContext } from 'react';

import api from '../../../../services/apiStaff';
import Form from '../Form/Form'
import TokenContext from '../../../Context/TokenContext';
import notification from '../../../../utils/notification';
const EditBarber = ({
    match,
    history,
}) => {
    const [token]=useContext(TokenContext);
    const [barber, setBarber] = useState({});
    const [notif, setNotif] = useState('');
    useEffect(() => {
        api.getOne(match.params,)
            .then(data => setBarber(data))
            .catch(err => console.log(err))
    }, [match]);



    function fetchEdit(e) {
        e.preventDefault();
        api.edit(barber,token)
            .then(res =>{
                setNotif('Your barber was edited!')
                setTimeout(() => {
                    history.push('/homePage')
                }, 2000)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='wrapper'>
            <h4 className='head'>Edit Barber</h4>

            <Form  submit={fetchEdit}
                setBarberValue={setBarber}
                name={barber.name}
                description={barber.description}
                imageUrl={barber.imageUrl}
                notif={notif}
            />

        </div>
    );
}

export default EditBarber;