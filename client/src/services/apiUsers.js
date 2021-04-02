import  constants from '../constants/constants'
const{baseUrl}=constants;

const registerUserRequest= (state)=>{
   return fetch(baseUrl+'/user/register', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(state),
    })
        .then(response => response.json())
        .catch(err=>console.log(err))

}
const loginUser = (data) => {

     return fetch(baseUrl+'/user/login',{
       
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          })
              .then(res => res.json())
              .catch(err=>console.log(err))

      }
      
  
export default {
    registerUserRequest,
    loginUser,
}