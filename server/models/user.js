var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption');

var userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:'{PATH} is required'
    },
    lastName: {
        type: String,
        required: '{PATH} is required'
    },
    username: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    salt: {
        type: String,
        required: '{PATH} is required'
    },
    hashed_pwd: {
        type: String,
        required: '{PATH} is required'
    },
    roles: [String]
});


userSchema.methods = {
    authenticate: function (passwordToMatch) {
        var nHash = encrypt.hashPwd(this.salt, passwordToMatch);
        return nHash === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
}

var User = mongoose.model('User', userSchema);


function createDefaultUsers() {
    User.find({}).exec(function (err, docs) {
        if(!docs.length) {
            var salt = encrypt.createSalt(),
                hash = encrypt.hashPwd(salt, 'one');
            User.create({firstName: 'one', lastName: 'oneL', username: 'one', salt: salt, hashed_pwd: hash, roles: ['admin']})
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'two')
            User.create({firstName: 'two', lastName: 'twoL', username: 'two', salt: salt, hashed_pwd: hash, roles: []})
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'three')
            User.create({firstName: 'three', lastName: 'threeL', username: 'three', salt: salt, hashed_pwd: hash})
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;