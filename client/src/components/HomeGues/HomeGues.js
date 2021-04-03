import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../Buttons/BookButton';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonMyHairStyles from '../Buttons/ButtonMyHairStyles';
function HomeGues({
  token,
}) {

    return (
        <>
          <ScheduleTime />
        
                <div className='wraper'>
                  <div className='head'>
                  {!token?<h4>Book your appointment now</h4>:null}
           
                  </div>
                  {!token?<BookButton />:<ButtonMyHairStyles/>}
             
                  <ImageGallery/>
                </div>
                
        
        </>
    );
}

export default HomeGues;