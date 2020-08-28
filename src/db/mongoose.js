const mongoose = require('mongoose');
// 'mongodb://127.0.0.1:27017/cat-clicker-api'
mongoose.connect('mongodb+srv://shinchan:password051@cluster0.kh5cb.mongodb.net/cat-clicker-api?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
