const mongoose= require('mongoose');

const Cat = mongoose.model('Cats',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    clicks: {
        type: Number
    }
})

module.exports = Cat