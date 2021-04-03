import  constants from '../constants/constants'

const addImage=(imageURL,token)=> {
    return fetch(constants.baseUrl+'/imageGallery/addImage',
    {

        method: 'POST',

        headers: {
            "Authorization" : `Bearer ${token.jwt}`,
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(imageURL),
    })
        .then(response => console.log(response))
        .catch(err=>console.log(err))

}
const getAllImages=()=> {
    return fetch(constants.baseUrl+'/imageGallery/getAllImages',{
      
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))

}
const getFilterImages=(token)=>{
    return fetch(constants.baseUrl+'/imageGallery/getFilterImages',{
        headers: {
            "Authorization" : `Bearer ${token.jwt}`,
            'Content-Type': 'application/json',
        },
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
export default {
    getFilterImages,
    getAllImages,
    addImage,
 

}