const PouchDB = require('pouchdb')
const db = new PouchDB('http://test:test@localhost:5984/api-test-aplchian/')


var listItems = (view, limit, cb) => {
    db.query(view, {
            include_docs: true,
            limit: limit
        })
        .then(function(body) {
            cb(null, body)
        })
        .catch(function(err) {
            cb(err)
        })
}

module.exports = {
    items: listItems
}
