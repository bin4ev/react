import api from '../../../../services/apiStaff';
import { useEffect } from 'react';
const DeleteStaff = ({
    match,

}) => {

    useEffect(() => {
        api.deleteBarber(match.params.id)
            .catch(err => console.log(err))
    },[match])
    return (
        <div class="alert">
            <strong style={{color:'red'}}>Your barber was deleted!</strong>
        </div>
    )
}
export default DeleteStaff;