import jwt_decode from "jwt-decode";

const decodedToken =(token)=>{
const decoded = jwt_decode(token);

return {
    username: decoded.username,
    role: decoded.role,
    jwt:token,
}
}
export default decodedToken;