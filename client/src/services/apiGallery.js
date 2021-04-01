import  constants from '../constants/constants'

const addImage=(imageURL)=> {
    return fetch(constants.baseUrl+'/imageGallery/addImage',
    {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(imageURL),
    })
        .then(response => console.log(response))
      

}
const getAllImages=()=> {
    return fetch(constants.baseUrl+'/imageGallery/getAllImages')
    .then(res=>res.json())
    
}
export default {

    getAllImages,
    addImage,
 

}