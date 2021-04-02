import { useState, useEffect } from 'react';
import api from '../../../../services/apiStaff';
import Form from '../Form/Form'


const EditBarber = ({
    match,
    history,
    token,
}) => {
    const [barber, setBarber] = useState({})

    useEffect(() => {
        api.getOne(match.params,token)
            .then(data => setBarber(data))
            .catch(err => console.log(err))
    }, [match])



    function fetchEdit(e) {
        e.preventDefault();
        api.edit(barber)
            .then(res => history.push('/homePage'))
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
            />

        </div>
    );
}

export default EditBarber;