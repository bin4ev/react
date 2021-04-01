import  constants from '../constants/constants'

const saveAppointment=(appointment)=> {
    return fetch(constants.baseUrl+`/appointmets/save`,{
        method: 'POST',
    
        headers: {
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(appointment),
       })
}
export default{
    saveAppointment,
}