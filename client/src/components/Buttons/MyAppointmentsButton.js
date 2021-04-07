
import { useHistory } from 'react-router-dom'

function MyAppointmentsButton() {
    const history = useHistory();
    return(
        <button className="button" onClick={() => history.push('/myAppointments')} > < span >Appointments </span></button>
    )
}
export default MyAppointmentsButton;