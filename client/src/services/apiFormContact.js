
import  constants from '../constants/constants';
const baseUrl=constants.baseUrl;

const formContacts = (formInfo) => {
    console.log(formInfo);
   return fetch (baseUrl+'/contacts/save',{

    method: 'POST',

    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify(formInfo),
})
    .then(response => console.log(response))
    .catch(err=>console.log(err))
}
 
export default{
    formContacts,
} 