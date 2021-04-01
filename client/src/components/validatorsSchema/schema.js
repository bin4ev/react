import * as yup from 'yup';

 const register =yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(5).max(15).required(),
    repeatPassword : yup.string().oneOf([yup.ref('password'),null]).required(),
})

const login = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(5).max(15).required(),

})


export default {
    register,
    login,
}
