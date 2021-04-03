
import { Link } from "react-router-dom";
import logo from '../../assets/logo.ico'
function Nav({
    token,
}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <Link to='/' className="navbar-brand">
                    <img src={logo} className='logo' width="90" height="60" alt='logo' />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                            <Link to='/homePage' className="nav-link" >OUR STAFF AND SERVICE <span className="sr-only">(current)</span></Link>
                        </li>
                        {token ?
                        
                            <Link to='/addImage' > <li className="nav-link mr-5">Add Image to Gallery</li></Link>
                            : null}
                    </ul>
                    <ul className="navbar-nav mr-20">
                        {!token ?
                         <>
                          <Link to='/register' className="nav-link" > <li>Register</li></Link> 
                            <Link to='/login' className="nav-link" > <li>Log in</li> </Link>
                            <Link to='/contacts' className="nav-link" > <li>Contacts</li></Link>
                            <Link to='/about' className="nav-link" ><li>About</li></Link></>
                        :
                        <>
                        <li className='nav-link'>Welcome, <strong>{token.username.toUpperCase()}</strong></li>
                         <Link to='/contacts' className="nav-link" > <li>Contacts</li></Link>
                         <Link to='/about' className="nav-link" ><li>About</li></Link>
                        <Link to='/logout' className="nav-link" > <li>Logout</li> </Link>
                            </>}
                    </ul>

                </div>
            </nav>

        </>


    );
}

export default Nav;
