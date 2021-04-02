import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../BookButton/BookButton';
import ImageGallery from './ImageGallery/ImageGallery';

function HomeGues({
  token,
}) {

    return (
        <>
          <ScheduleTime />
        
                <div className='wraper'>
                  <div className='head'>
                <h4>Book your appointment now</h4>
                  </div>
                  <BookButton />
                  <ImageGallery/>
                </div>
                
        
        </>
    );
}

export default HomeGues;