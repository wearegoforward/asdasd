const mongoose = require('mongoose');
const {Schema} = mongoose;

function  hash(password) {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');
}

const Account = new Schema({
    profile: {
        username: String,
        thumbnail:{type:String, default: '/static/images/default_thumbnail.png'}
    },
    email: {type: String},
    //소셜 계정으로 회원가입을 할 경우에는 각 서비스에서 제공되는 id와 accessToken 을 저장
    social: {
        facebook:{
            id: String,
            accessToken: String
        },
        google: {
            id: String,
            accessToken: String
        }
    },
    password: String, //로컬계정의 경우엔 비밀번호를 해싱해서 저장
    thoughtCount: {type: Number,default:0}, //서비스에서 포스트를 작성 할 때0마다 1씩올라감
    createAt: {type:Date, default: Date.now}
});

module.exports = mongoose.model('Account',Account);