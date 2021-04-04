import { Route, Switch ,Redirect} from 'react-router-dom';
import {useState} from'react';

import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Nav from './components/Nav/Nav';
import HomeGues from './components/HomeGues/HomeGues';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import BookForm from './components/HomeGues/AppointmentForm/AppointmentForm';
import AddImage from './components/AddImage/AddImage';
import AddBarberPage from './components/HomePage/StaffMembers/AddBarberPage/AddBarberPage';
import BarberDetails from './components/HomePage/StaffMembers/BarberDetails/BarberDetails';
import EditBarber from './components/HomePage/StaffMembers/EditBarber/EditBarber';
import DeleteStaff from './components/HomePage/StaffMembers/DeleteStaff/DeleteStaff';
import MyHairStylesList from './components/MyHariStylesList/MyHairStylesList';
import HairstylesDetails from './components/MyHariStylesList/HairstylesDetails';
import MyAppointmentsList from './components/MyAppointmentsList/MyAppointmentsList';

function App() {

const [token,setToken] =useState(null)

console.log(token);
 
  return (
    <>
      <Nav token = {token}/>
          <Switch>
          <Route path='/homePage'render={(props)=><HomePage {...props}token={token}/>} />
            <Route path='/' exact render={(props)=><HomeGues {...props}token={token}/>} />
            <Route path='/homeGues/book' exact render={(props)=><BookForm token={token}/>} />
            <Route path='/about' render={(props)=><About {...props}token={token}/>} />
            <Route path='/contacts' render={(props)=><Contacts{...props} token={token}/>} />
          <Route path='/login' render={props=><Login {...props}setToken ={setToken}/>}/>
            <Route path='/register' render={(props)=><Register{...props} token={token}/>} />
            <Route path='/logout' render={props=>{
              setToken(null)
                return <Redirect to ='/'/>
            }}/>
            <Route path='/addImage'render={(props)=><AddImage {...props}token={token}/>} />
            <Route path='/addBarber'render={(props)=><AddBarberPage{...props} token={token}/>} />
            <Route path='/barber/:id' exact render={(props)=><BarberDetails {...props}  token={token}/>} />
            <Route path='/barber/edit/:id'render={(props)=><EditBarber {...props} token={token}/>} />
            <Route path='/barber/delete/:id'render={(props)=><DeleteStaff {...props}token={token}/>} />
            <Route path='/myHairstyles' exact render={(props)=><MyHairStylesList {...props}token={token}/>} />
            <Route path='/myHairstyles/image/:id'render={(props)=><HairstylesDetails {...props}token={token}/>} />
            <Route path='/myAppointments' render={(props)=><MyAppointmentsList {...props}token={token}/>} />
          </Switch>
    <Footer/>
    </>
   

  );
}

export default App;
