import api from '../../../../services/apiStaff';
import { useEffect,useContext } from 'react';
import TokenContext from '../../../Context/TokenContext';
const DeleteStaff = ({
    match,
}) => {
 const [token] =useContext(TokenContext);

    useEffect(() => {
        api.deleteBarber(match.params.id,token)
        .catch(err =>console.log(err))
    }, [match])

        return (

            <div class="alert">
                <strong style={{ color: 'red' }}>Your barber was deleted!</strong>
            </div>
    
        )
    

}
export default DeleteStaff;