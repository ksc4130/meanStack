var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meanStack',
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://ksc4130:meanstack@ds041032.mongolab.com:41032/meanstack',
        port: process.env.PORT || 80
    }
};