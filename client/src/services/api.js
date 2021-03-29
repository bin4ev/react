const baseUrl ='http://localhost:5000'


function registerUserRequest (state){
   return fetch(baseUrl+'/user/register', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(state),
    })
        .then(response => response.json())
      
}

function getStaff(){
    return  fetch(baseUrl+'/staff/all')
    .then(res=>res.json())
    
}

function addImage(imageURL) {
    return fetch(baseUrl+'/imageGallery/addImage',
    {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(imageURL),
    })
        .then(response => console.log(response))
      

}
function getAllImages() {
    return fetch(baseUrl+'/imageGallery/getAllImages')
    .then(res=>res.json())
    
}

function addBarber(barber) {

   return fetch(baseUrl+'/staff/addBarber',{
    method: 'POST',

    headers: {
        'Content-Type': 'application/json',
    },

    body: JSON.stringify(barber),
   })
}
function getOne({id}) {

    return fetch(baseUrl+`/staff/barber/${id}`)
    .then(res=>res.json());
}
export default {
    registerUserRequest,
    getStaff,
    getAllImages,
    addImage,
    addBarber,
    getOne,

}