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
                <h4>Login</h4>
              <LoginForm/>
            </div>

        )
    }
}
export default Login