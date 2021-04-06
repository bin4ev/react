
import { Link } from "react-router-dom";
import TokenContext from '../Context/TokenContext';
import {useContext} from 'react';
import logo from '../../assets/logo.ico'

function Nav({
    
}){
    const [token] =useContext(TokenContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">


                <Link to='/' className="navbar-brand">
                    <img src={logo} className='logo' width="90" height="60" alt='logo' />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                            <Link to='/homePage' className="nav-link" >Our staff and service <span className="sr-only">(current)</span></Link>
                        </li>
                        {token ?
                            <Link to='/addImage' > <li className="nav-link mr-5">Add image to main gallery</li></Link>
                            : null}
                             {token?.role=='admin'&& <Link to='/allComments' > <li className="nav-link mr-5">All comments</li></Link>} 
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
