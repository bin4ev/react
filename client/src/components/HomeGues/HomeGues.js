import './HomeGues.css';
import ScheduleTime from './ScheduleTime/ScheduleTime'
import BookButton from '../BookButton/BookButton';
import ImageGallery from './ImageGallery/ImageGallery';

function HomeGues() {

    return (
        <>
            <div className="container" >
                <ScheduleTime />
                <div className='wraper'>
                    <strong>Book online appointment</strong>
                    <BookButton />
                </div>
                <div className='container'>
                 <ImageGallery/>
                </div>
            </div>
        </>
    );
}

export default HomeGues;