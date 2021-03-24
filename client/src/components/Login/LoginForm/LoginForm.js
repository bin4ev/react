


function LoginForm() {

    return (
        <div className='form'>
        <form  >
            <input type="text" name="username" placeholder='Username'  />
            <br />
            <input type="text" name="password" placeholder="Password"  />
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div >
    );
}

export default LoginForm;
