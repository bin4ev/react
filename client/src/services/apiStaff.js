import  constants from '../constants/constants'

const registerUserRequest= (state)=>{
   return fetch(constants.baseUrl+'/user/register', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(state),
    })
        .then(response => response.json())
      
}

const addBarber=(barber) =>{

   return fetch(constants.baseUrl+'/staff/addBarber',{
    method: 'POST',

    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify(barber),
   })
}

const getOne=({id}) =>{

    return fetch(constants.baseUrl+`/staff/barber/${id}`)
    .then(res=>res.json());
}

const edit=(barber) =>{
    return fetch(constants.baseUrl+`/staff/barber/edit`,{
        method: 'POST',
    
        headers: {
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(barber),
       })
}

const deleteBarber=(_id)=>{
    return fetch(constants.baseUrl+`/staff/barber/delete/${_id}`)
   
}
export default {
  
    addBarber,
    getOne,
    edit,
    deleteBarber,

}