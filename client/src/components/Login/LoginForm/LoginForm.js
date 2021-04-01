import { Button } from "reactstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import schema from '../../validatorsSchema/schema';
import api from '../../../services/apiUsers';
import { withRouter } from 'react-router-dom';
function LoginForm({
    history,
}) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema.login)
    });


const submitForm = (data)=>{
    api.loginUser(data)
    .then(token=>{
        console.log(token)
        history.push('/homePage')
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
