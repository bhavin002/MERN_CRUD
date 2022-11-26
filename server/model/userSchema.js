import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    city:{
        type:String,
        required:true
    }
})
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');

const user = mongoose.model('user',userSchema);

export default user;

