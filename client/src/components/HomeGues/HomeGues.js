import {useContext} from 'react'

import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../Buttons/BookButton';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMyHairStyles from '../Buttons/ButtonMyHairStyles';
import MyAppointmentsButton from '../Buttons/MyAppointmentsButton';
import TokenContext from '../Context/TokenContext'
function HomeGues({

}) {
const [token]=useContext(TokenContext);
    return (
        <>
          <ScheduleTime />
        
                <div className='wraper'>
                  <div className='head'>
                  {!token?<h1 className="display-4">Book your appointment now</h1>:null}  
           
                  </div>
                  {!token?<BookButton />
                  :<div><ButtonMyHairStyles/>
                  <MyAppointmentsButton/>
                  </div>}
             
                  <ImageGallery/>
                </div>
                
        
        </>
    );
}

export default HomeGues;