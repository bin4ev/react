import { Button } from "reactstrap";



function LoginForm() {

    return (
        <div className='form'>
        <form  >
            <input type="text" name="username" placeholder='Username'  />
            <br />
            <input type="text" name="password" placeholder="Password"  />
            <br />
       
            <Button>Submit</Button> 
        </form>
    </div >
    );
}

export default LoginForm;
