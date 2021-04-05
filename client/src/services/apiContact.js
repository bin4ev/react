

import constants from '../constants/constants';
const baseUrl = constants.baseUrl;

const formContacts = (formInfo) => {
  
    return fetch(baseUrl + '/contacts/save', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(formInfo),
    })
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

const getAllComments = (token) => {
    return fetch(baseUrl + '/allComments/all', {
        headers: {
            "Authorization": `Bearer ${token.jwt}`,
        }
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))

}
const deleteComment = (commentId)=>{
    console.log(commentId);
    return fetch(baseUrl+`/allComments/delete/${commentId}`)
    .then(data=>data.json())
    .catch(err=>console.log(err))
}

export default {
    formContacts,
    getAllComments,
    deleteComment,

}