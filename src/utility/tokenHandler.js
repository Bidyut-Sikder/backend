const jwt = require('jsonwebtoken')





const Encode = (email, id) => {
    const KEY = "1234567-XYZ-ABC"
    const PAYLOAD = {
        email: email,
        userId: id,
    }

    const token = jwt.sign(PAYLOAD, KEY)
    return token;
}








const Decode = (token) => {

    const KEY = "1234567-XYZ-ABC"
    const decoded = jwt.verify(token, KEY)
   
    return decoded;

}




module.exports = {
    Encode, Decode
}













