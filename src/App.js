
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts/Contacts';
import Nav from './components/Nav/Nav';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
          </Switch>
        </div>

      </div>

    </Router>

  );
}

export default App;
