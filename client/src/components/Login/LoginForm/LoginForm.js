import { Button } from "reactstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { withRouter } from 'react-router-dom';

import schema from '../../validatorsSchema/schema';
import api from '../../../services/apiUsers';

import decodedToken from '../../../utils/decodeToken'
function LoginForm({
    setToken,
    history,
}) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema.login)
    });


const submitForm = (data)=>{
    api.loginUser(data)
    .then(token=>{

        setToken(decodedToken(token))
        history.push('/')
    })
    .catch(err=>console.log(err))
}
    return (
        <div className='form'>
            <div className='form-data'>

            <form  onSubmit={handleSubmit(submitForm)}>
            <input type="text" name="username" placeholder='Username' ref={register}  />
            <p>{errors.username?.message}</p>
            <br />
            <input type="text" name="password" placeholder="Password" ref={register}  />
            <p>{errors.password?.message}</p>
            <br />
            <Button>Submit</Button> 
        </form>
            </div>
  
    </div >
    );
}

export default withRouter(LoginForm) ;
