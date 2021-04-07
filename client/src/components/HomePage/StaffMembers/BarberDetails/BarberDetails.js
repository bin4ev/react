
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useState, useEffect,useContext } from 'react'

import './BarberDetails.css';
import api from '../../../../services/apiStaff';
import TokenContext from '../../../Context/TokenContext';

const BarberDetails = ({
    match,
    
}) => {
    const [token]=useContext(TokenContext);
    const [barber, setBarber] = useState('');

    useEffect(() => {
        api.getOne(match.params)
            .then(data => setBarber(data))
            .catch(err => console.log(err))

    }, [match])


    return (

        <div className='card-details'>

            <img src={barber.imageUrl} alt='barber image' />
            <div className='card-text'>
                <h2>{barber.name}</h2>
                <p>{barber.description}</p>
                {token.role=='admin'?
                 <>
                 <Link to={`/barber/edit/${barber._id}`}><Button style={{ marginRight: 20 }}>Edit</Button></Link>
                    <Link to={`/barber/delete/${barber._id}`}><Button>Delete</Button></Link>
                    </>
                     : null}

            </div>



        </div>

        
    );
}

export default BarberDetails;