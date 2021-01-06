const mongoose = require('mongoose');
const {Schema} = mongoose;

//book 에서 사용할 서브다큐먼트의 스키마 입니다.
const Author = new Schema({
    name: String,
    email: String
});

const Book = new Schema({
    title: String,
    authors: [Author],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt:{ //기본값을 설정할땐 이렇게 객체로 설정해줍니다
        type: Date,
        default: Date.now //기본값ㄷ은 현재 날짜로 지정합니다.
    }
});

// 스키마를 모델로 변환하여, 내보내기 합니다.
module.exports = mongoose.model('Book', Book);