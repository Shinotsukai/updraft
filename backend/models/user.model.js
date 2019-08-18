//includes

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//database schema

const userSchema = new Schema ({
    username {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}
{
        timestamps: true,

});


//Make schema available
const User = mongoose.model('User', userSchema);
module.exports = User;