import mongoose from 'mongoose';
const user= new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }

});
const User=mongoose.model('User',user);
export default User;