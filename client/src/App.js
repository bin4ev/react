
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Nav from './components/Nav/Nav';
import HomeGues from './components/HomeGues/HomeGues'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'
import Logout from './components/Logout/Logout'

function App() {
  return (
    <>
        <div className = 'container'>
          <Nav />
          <Switch>
            <Route path='/' exact component={HomeGues} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/logout' component={HomeGues} />
          </Switch>
        </div>
    <Footer/>
    </>
   

  );
}

export default App;
