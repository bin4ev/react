import './BookButton.css'
import { useHistory } from 'react-router-dom'

function BookButton() {
    const history = useHistory();
    return(
        <button class="button" onClick={() => history.push('/homeGues/book')} > < span > Booking now </span></button>
    )
}
export default BookButton;