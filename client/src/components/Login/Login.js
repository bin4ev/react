import { Component } from 'react';
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='login-wrapper'>
                <h3>Login</h3>
              <LoginForm/>
            </div>

        )
    }
}
export default Login