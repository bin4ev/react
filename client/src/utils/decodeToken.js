import jwt_decode from "jwt-decode";
const decodedToken =(token)=>{
try {
    const decoded = jwt_decode(token);
    return {
        username: decoded.username,
        role: decoded.role,
        jwt:token,
    }
} catch (error) {
    
    throw Error('Invalid data!')
}


}
export default decodedToken;