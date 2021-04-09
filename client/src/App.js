import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import TokenContext from './components/Context/TokenContext'
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
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
import Allfeedback from './components/AllFeedback.js/Allfeedback';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {

  const [token, setToken] = useState()

  console.log(token);

  return (
    <>
    <ErrorBoundary>
      <TokenContext.Provider value={[token, setToken]}>
        <Nav />
        <Switch>
          <Route path='/homePage' component={HomePage} />
          <Route path='/' exact component={HomeGues} />
          <Route path='/homeGues/book' exact component={BookForm} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={ContactUs} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' render={() => {
            setToken(null)
             return <Redirect to='/' />
          }} />
          <Route path='/addImage' component={AddImage} />
          <Route path='/addBarber' component={AddBarberPage} />
          <Route path='/barber/:id' exact component={BarberDetails} />
          <Route path='/barber/edit/:id' component={EditBarber} />
          <Route path='/barber/delete/:id' component={DeleteStaff} />
          <Route path='/myHairstyles' exact component={MyHairStylesList} />
          <Route path='/myHairstyles/image/:id' component={HairstylesDetails} />
          <Route path='/myAppointments' component={MyAppointmentsList} />
          <Route path='/allComments' component={Allfeedback} />
        </Switch>
        <Footer />
      </TokenContext.Provider>
      </ErrorBoundary>
    </>


  );
}

export default App;
