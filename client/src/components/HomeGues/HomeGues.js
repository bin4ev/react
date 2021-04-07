import {useContext} from 'react'

import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../Buttons/BookButton';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMyHairStyles from '../Buttons/ButtonMyHairStyles';
import MyAppointmentsButton from '../Buttons/MyAppointmentsButton';
import TokenContext from '../Context/TokenContext'
function HomeGues() {
const [token]=useContext(TokenContext);
    return (
        <>
       
        
                <div className='container'>
                <ScheduleTime />
                {!token?<BookButton />
                  :
                  <div><ButtonMyHairStyles/>
                      <MyAppointmentsButton/>
                  </div>}
             
                  <ImageGallery/>
                </div>

              
         
                
        
        </>
    );
}

export default HomeGues;