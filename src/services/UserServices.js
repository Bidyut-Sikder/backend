
const UserModel = require("../Models/UserModel");
const EmailSend = require("../utility/emailHandler");
const { Encode } = require("../utility/tokenHandler");


const SignUpServies = async (req) => {

    try {

        const email = req.body.email;
        //  console.log(email)
        let code = Math.floor(100000 + Math.random() * 900000)
        let EmailText = `Your verification code is ${code}`

        let EmailSubject = 'Email verification '
        const reqBody = req.body;
        reqBody.otp = code

       

        const exists = await UserModel.find({ email: email })


        if (exists.length === 0) {
            await EmailSend(email, EmailText, EmailSubject)

            await UserModel.create(reqBody)
            return { status: 'success', message: '6 digit OTP has been sent.' }
        }

        return { status: 'fail', message: 'Email already exists' }



    } catch (error) {
        console.log(error)
        return { status: 'fail', message: 'Something went wrong.' }

    }





}





const UserOTPServies = async (req) => {

    try {
        const email = req.params.email;
        const password = req.params.password;
        let code = Math.floor(100000 + Math.random() * 900000)
        let EmailText = `Your verification code is ${code}`

        let EmailSubject = 'Email verification '

    

        const res = await UserModel.updateOne({ email: email, password: password }, { $set: { otp: code } })
        if (res.matchedCount === 0) {
            return { status: 'fail', message: 'Invalid email or password.' }
        }

        await EmailSend(email, EmailText, EmailSubject)
       
        //  await UserModel.updateOne({ email: email,password:password }, { $set: { otp: code } }, { upsert: true })

        return { status: 'success', message: '6 digit OTP has been sent.' }


    } catch (error) {
        console.log(error)
        return { status: 'fail', message: 'Something went wrong.' }

    }





}



//verify otp here

const VeryfyOTPLoginServies = async (req) => {

    try {
        const email = req.params.email;
        const otp = req.params.otp;



        let total = await UserModel.find({ email: email, otp: otp }).count('total');
        if (total === 1) {
            //user_id reading
            let user_id = await UserModel.find({ email: email, otp: otp }).select('_id')

            let token = Encode(email, user_id[0]._id.toString())

            await UserModel.updateOne({ email: email }, { $set: { otp: "0" } })

            return { status: 'success', message: 'Valid OTP', token: token }
        } else {
            return { status: 'fail', message: 'Invalid OTP' }

        }



    } catch (error) {
        console.log(error)
        return { status: 'fail', message: 'Invalid OTP' }

    }
}





const SaveProfileServies = async (req) => {

    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body
        // reqBody.userID = user_id;


        await UserModel.updateOne({ _id: user_id }, { $set: reqBody }, { upsert: true })

        return { status: 'success', message: 'Profile save success' }
    } catch (error) {
        return { status: 'fail', message: 'Something went wrong' }

        console.log(error.toString())
    }
    // { $set: reqBody }, { upsert: true }
}







const ReadProfileServies = async (req) => {
    try {
        let user_id = req.headers.user_id;

        let result = await UserModel.find({ _id: user_id }, { otp: 0 })

        return { status: 'success', data: result }
    } catch (error) {
        return { status: 'success', message: 'Something went Wrong.' }

    }
}


module.exports = {
    SignUpServies,
    UserOTPServies,
    VeryfyOTPLoginServies,
    SaveProfileServies,
    ReadProfileServies
}

















