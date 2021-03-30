import api from '../../../../services/api';
import { useEffect } from 'react';
const DeleteStaff = ({
    match,
    histoty,
}) => {
    useEffect(() => {
        api.deleteBarber(match.params.id)
            .then(res => histoty.push('/homePage'))
            .catch(err => console.log(err))
    },[match])
    return (
        <div class="alert">
            <strong>Your barber was deleted!.</strong>
        </div>
    )
}
export default DeleteStaff;