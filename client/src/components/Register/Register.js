import { Component } from 'react';
import RegisterForm from './RegisterForm/RegisterForm'
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='register-wrapper'>
                <h3>Register</h3>
                <RegisterForm />
            </div>

        )
    }
}
export default Register