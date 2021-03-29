import { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

import './StaffMembers.css';
import api from '../../../services/api'

function StaffMembers() {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    api.getStaff()
      .then(data => setBarbers(data))


  }, [])

  return (
    <>
      <Link to='/addBarber'><Button color="secondary">Add new Barber</Button></Link>
      <div class="row">
        <h1>Top Barbers Staff</h1>
        {barbers.map(barber =>
          <div class="column" key={barber._id}>
            <Link to={`/barber/${barber._id}`}><img src={barber.imageUrl} /></Link>
              <h2>{barber.name}</h2>
              <p>{barber.description}</p>
          </div>)}

      </div>


    </>

  )
}
export default StaffMembers;