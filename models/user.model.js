//includes

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//database schema

const UserSchema = new Schema ({
    username: {
        type: String, required: true, unique: true, trim: true, minlength: 3 },
    email: {
        type: String, required: true },
    password: {
        type: String, required: true },

},
{
        timestamps: true,

});


//Make schema available

module.exports = User = mongoose.model('users', UserSchema);