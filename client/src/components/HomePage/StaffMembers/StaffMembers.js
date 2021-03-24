import './StaffMembers.css';
import { useState, useEffect } from 'react';
import api from '../../../services/api'
function StaffMembers() {
  const [barbers, setBarbers] = useState([]);

  function setState(data) {
    setBarbers((prevState) => prevState = data)
  }


  useEffect(() => {
    api.getStaff()
      .then(data => setState(data))


  })

  return (

    <div class="row">
      <h1>Top Barbers Staff</h1>
      {barbers.map(barber => <div class="column" key={barber._id}>
        <img src={barber.imageUrl}/>
        <h2>{barber.name}</h2>
        <p>{barber.description}</p>
      </div>)}

    </div>
  )
}
export default StaffMembers;