
function registerUserRequest (baseUrl,state){
   return fetch(baseUrl, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(state),
    })
        .then(response => response.json())
      
}
export default {
    registerUserRequest,
}