import { useState, useEffect } from 'react';
import api from '../../../../services/api';
import './AddNewBarberPage.css'
const AddBarberPage = ({
    history,
}) => {
    const [barber, setBarber] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        setBarber({
            name: e.target.name.value,
            description: e.target.description.value,
            imageUrl: e.target.imageUrl.value,
        })

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
        <div className='form'>
              <div className='form-data'>
                  <form onSubmit={submitHandler}>
                   <input type='text' name='name' placeholder='Name'></input>
                    <br />
                  <input type='text' name='description' placeholder='Description'></input>
                  <br />
                  <input type='text' name='imageUrl' placeholder='imageUrl'></input>
                  <br />
                  <button className='btn btn-dark'>Submit</button>
                  </form>
              </div>
          </div>
        </div>
            
    

    );
}

export default AddBarberPage;