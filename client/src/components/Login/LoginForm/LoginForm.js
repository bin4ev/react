import { Button } from "reactstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { withRouter } from 'react-router-dom';
import { useContext, useState } from 'react';
import TokenContext from '../../Context/TokenContext';

import validatorsSchema from '../../../utils/validatorsSchema';
import api from '../../../services/apiUsers';
import decodedToken from '../../../utils/decodeToken';
import errorHandler from '../../../utils/errorHandler';





function LoginForm({
    history,
}) {
    const [error, setError] = useState(null);
    const [token, setToken] = useContext(TokenContext);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validatorsSchema.login)
    });

    const submitForm = (data) => {
        api.loginUser(data)

            .then(data => {
                if(data.messages){
                    throw Error('Invalid password')
                }
               
                setToken((oldState) => oldState = decodedToken(data))
                setError(null)
                history.push('/')
            })
            .catch(err => {
                setError(err.message);
            
            })
    }
    console.log(error);
    return (
        <div className='form'>
            <div className='form-data'>
                {errorHandler(error)}
                <form onSubmit={handleSubmit(submitForm)}>
                    <input type="text" name="username" placeholder='Username' ref={register} />
                    <p>{errors.username?.message}</p>
                    <br />
                    <input type="text" name="password" placeholder="Password" ref={register} />
                    <p>{errors.password?.message}</p>
                    <br />
                    <Button>Submit</Button>
                </form>
            </div>

        </div >
    );
}

export default withRouter(LoginForm);
