import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "reactstrap";
import errorHandler from '../../../utils/errorHandler';

import './RegisterForm.css';
import api from '../../../services/apiUsers';
import validatorSchema from '../../../utils/validatorsSchema'



const RegisterForm = ({
    history
}) => {
    const [error, setError] = useState(null);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validatorSchema.register)
    })

    const submitForm = (data) => {
        api.registerUserRequest(data)
            .then((res) => {
                if (!res.ok) {
                    setError(null)
                    throw Error('Register name is already exist!')
                   
                }
                history.push('/login')
            }
            )
            .catch(err => setError(err.message))
    }

    return (
        <div className='form'>

            <div className='form-data'>
{errorHandler(error)}
                <form onSubmit={handleSubmit(submitForm)}  >
                    <input type="text" name="username" placeholder='Username' ref={register} />
                    <p>{errors.username?.message}</p>
                    <input type="password" name="password" placeholder="Password" ref={register} />
                    <p>{errors.password?.message}</p>
                    <input type="password" name="repeatPassword" placeholder="repeat Password" ref={register} />
                    <p>{errors.repeatPassword && 'Passwords not match!'}</p>
                    <Button>Submit</Button>
                </form>
            </div>
        </div >
    )

}
export default withRouter(RegisterForm);