import { Component } from 'react';
import Form from './Form/Form'

class Register extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='wrapper'>
                <h3>Register</h3>
                <Form />
            </div>

        )
    }
}
export default Register