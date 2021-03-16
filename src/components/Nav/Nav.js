
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="App">
            <nav>
                <Link to='/'>
                    <h3 className='logo'>Home</h3>
                </Link>

                <ul className='nav-links'>
                <Link to='/register'>
                        <li>Sign up</li>
                    </Link>

                    <Link to ='/login'>
                    <li>Log in</li>
                    </Link>
                 
                    <Link to='/contacts'>
                        <li>Contacts</li>
                    </Link>

                    <Link to='/about'>
                        <li>About</li>
                    </Link>

                    <Link to='/'>
                        <li>Logout</li>
                    </Link>

                </ul>
            </nav>

        </div>
    );
}

export default Nav;
