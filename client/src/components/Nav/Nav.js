

import { Link } from "react-router-dom";
import logo from '../../assets/favicon.ico'
function Nav() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light"> 


                <Link to='/'class="navbar-brand">
                        <img src={logo} className='logo' width="90" height="60"alt='logo' />
                </Link>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/homePage' class="nav-link" >Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <Link to='/addImage' > <li class="nav-link mr-5">Add Image to Gallery</li></Link>
                     
                    </ul>
                    <ul class="navbar-nav mr-20">
                            <li class="nav-item ">
                            <Link to='/register'class="nav-link" > <li>Sign up</li></Link>
                            </li>
                            <Link to='/login'class="nav-link" > <li>Log in</li> </Link>
                            <Link to='/contacts'class="nav-link" > <li>Contacts</li>
                            </Link>
                             <Link to='/about'class="nav-link" ><li>About</li></Link>
                            <Link to='/'class="nav-link" > <li>Logout</li> </Link>
                         </ul>

                </div>
            </nav>
           
        </>


    );
}

export default Nav;
