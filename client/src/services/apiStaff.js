import  constants from '../constants/constants'

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
    .then(res=>res.json())
    .catch(err=>console.log(err));

}

const edit=(barber,token) =>{
    return fetch(constants.baseUrl+`/staff/barber/edit`,{
        method: 'POST',
    
        headers: {
            "Authorization" : `Bearer ${token.jwt}`,
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify(barber),
       })
}

const deleteBarber=(_id)=>{
    return fetch(constants.baseUrl+`/staff/barber/delete/${_id}`)
    .catch(err=>console.log(err))

}
export default {
  
    addBarber,
    getOne,
    edit,
    deleteBarber,

}