const mongoose = require('mongoose')


const UserSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    phone: { type: String },
    password: { type: String },
    image: { type: String },
    otp: { type: String },



}, { versionKey: false })




const UserModel = mongoose.model('user', UserSchema)



 

module.exports = UserModel;

