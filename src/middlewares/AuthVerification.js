
const { Decode } = require("../utility/tokenHandler")


exports.AuthVerification = async (req, res, next) => {

    let token = req.headers['token']
   //console.log(token)
    if (!token) {
         token = req.cookies['token']
    }
   
   // console.log(token)
    if (token === undefined) {
        return res.status(401).json({ status: 'fail', message: 'Unauthorized' })
    }
    let decoded = Decode(token)
   // console.log(decoded)

    if (decoded === null) {
        return res.status(401).json({ status: 'fail', message: 'Unauthorized' })
    } else {
        let email = decoded['email']
        let user_id = decoded['userId']

        req.headers.email = email;
        req.headers.user_id = user_id
        next()
    }
 

}
 