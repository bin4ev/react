
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
const Login=({
    setToken,
})=> {

        return (
            <div className='login-wrapper'>
                <h4>Login</h4>
              <LoginForm setToken={setToken}/>
            </div>

        )
    
}
export default Login

