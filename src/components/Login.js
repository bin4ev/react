import { Component } from 'react';
import Form from './Form/Form'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <Form />
            </div>

        )
    }
}
export default Login