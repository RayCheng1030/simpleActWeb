const TW_TIME = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    workId:{
        type:String,
        required:true
    },
    familyNum:{
        type:Number,
        required:true
    },
    vegefood:{
        type:Boolean,
        default:false,
        required:false
    },
    setTime:{
        type:String,
        default:TW_TIME
    }
});

module.exports = mongoose.model('UserSchema',UserSchema);