import {useState,useEffect} from 'react';
import api from '../../services/apiAppointmets';
const MyAppointmentsList = ({
    token,
}) => {
  const  [appointments,setAppointments] = useState([]);

    
useEffect(() => {
        api.getAll(token)
        .then(data=>setAppointments(data))
        .catch(err=>console.log(err))
    },[])


    return ( 

      <div className='container'>
        <h3 className="display-6">My appointments</h3>
      <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Service</th>
          <th scope="col">Barber</th>
        </tr>
      </thead>
      <tbody>
        {
        appointments.map(x=>(
          <tr key={x._id}>
          <th scope="row">{Number(appointments.indexOf(x))+1}</th>
          <td>{x.name}</td>
          <td>{x.phone}</td>
          <td>{x.service}</td>
          <td>{x.barber}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
        </div>
    );
}

export default MyAppointmentsList;