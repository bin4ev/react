const baseUrl ='http://localhost:5000'


function registerUserRequest (endPoint,state){
   return fetch(baseUrl+endPoint, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(state),
    })
        .then(response => response.json())
      
}

function getStaff(){
    return  fetch(baseUrl+'/staff')
    .then(res=>res.json())
    

}

function addImage(imageURL) {
    return fetch(baseUrl+'/imageGalery/addImage',
    {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(imageURL),
    })
        .then(response => console.log(response))
      

}
export default {
    registerUserRequest,
    getStaff,
    addImage,
}