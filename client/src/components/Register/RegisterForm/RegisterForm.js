import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "reactstrap";

import './RegisterForm.css';
import api from '../../../services/apiUsers';
import schema from '../../validatorsSchema/schema';


const RegisterForm = ({
    history
}) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema.register)
    })

    const submitForm = (data) => {
        api.registerUserRequest(data)
            .then((data) => history.push('/login'))
            .catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <div className='form-data'>

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