
import './Nav.css';
import { Link } from "react-router-dom";
import logo from '../../images/favicon.ico'
function Nav() {

    return (
        <div className="App">
            <nav>
                <Link to='/'>
                    <h1 className='logo'>
                        <img src={logo}/>
                        </h1>
                </Link>
                    <Link to='/homePage'>
                    <h5 className='link'>Home Page</h5>
                   
                    </Link>
                

                <ul className='nav-links'>
                     <Link to='/addImage'> <p>Add Image to Galery</p></Link>
                    <Link to='/register'> <li>Sign up</li></Link>
                    <Link to='/login'> <li>Log in</li> </Link>
                    <Link to='/contacts'> <li>Contacts</li>
                    </Link> <Link to='/about'><li>About</li></Link>
                    <Link to='/'> <li>Logout</li> </Link>

                </ul>
            </nav>

        </div>
    );
}

export default Nav;
