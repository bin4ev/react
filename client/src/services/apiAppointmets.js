import  constants from '../constants/constants'

const saveAppointment=(appointment)=> {
    return fetch(constants.baseUrl+`/appointmets/save`,{
        method: 'POST',
    
        headers: {
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(appointment),
       })
       .then(res=>res.json())
       .catch(err=>console.log(err))
}
export default{
    saveAppointment,
}