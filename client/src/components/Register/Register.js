import { Component } from 'react';
import Form from './Form/Form'
import './Register.css'

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='register-wrapper'>
                <h3>Register</h3>
                <Form />
            </div>

        )
    }
}
export default Register