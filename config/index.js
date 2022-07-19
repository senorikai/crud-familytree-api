const rethinkdbdash = require('rethinkdbdash');

module.exports = rethinkdbdash({
    host: 'localhost',
    port: 8080,
    db: 'FamilyTree'
})
