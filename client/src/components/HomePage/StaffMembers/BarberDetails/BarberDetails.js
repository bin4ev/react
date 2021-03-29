
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react'

import './BarberDetails.css'
import api from '../../../../services/api';
import AddBarberPage from '../AddBarberPage/AddBarberPage';

const BarberDetails = ({
    match,
}) => {
    const [barber, setBarber] = useState('')

    useEffect(() => {
        api.getOne(match.params)
            .then(data => setBarber(data))
            .catch(err => console.log(err))
    }, [match])


    return (
        <div className='card-details'>
                <img src={barber.imageUrl} />
                <div className='card-text'>
                <h2>{barber.name}</h2>
                <p>{barber.description}</p>
                <Link to ={`/barber/edit/${barber._id}`}><Button style={{ marginRight: 20 }}>Edit</Button></Link>
                <Button>Delete</Button>
                </div>
                

        
        </div>
    );
}

export default BarberDetails;