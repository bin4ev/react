
import './ScheduleTime.css';

function ScheduleTime(params) {
    return(
        <div className='working-hour'>
        <div className='days'>
            <h3>Bussines Hours</h3>
            <div>
                <strong>Monday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Thuesday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Wednesday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Thursday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Friday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Saturday</strong>
                <span>08:00-19:00</span>
            </div>
            <div>
                <strong>Sunday</strong>
                <span>Closed</span>
            </div>
        </div>
    </div>
    )
}
export default ScheduleTime