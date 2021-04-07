import { Component } from 'react';

import RegisterForm from './RegisterForm/RegisterForm'
import './Register.css'

class Register extends Component {

    render() {
        return (
      
                 <div className='register-wrapper'>
                 <h4>Register</h4>
             <RegisterForm/>
                
             </div>
             )
        

      
   
        

        
    }
}
export default Register