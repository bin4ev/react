import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../BookButton/BookButton';

function HomeGues() {
  
    return (
        <>
            <div className="main" >
               <ScheduleTime/>
                <div className='wraper'>
                    <strong>Book online appointment</strong>
                 <BookButton/>
                </div>
            </div>

        </>
    );
}

export default HomeGues;