const PouchDB = require('pouchdb')
const db = new PouchDB('http://localhost:5984/api-test-aplchian/')

const getItem = (doc, cb) => {
    db.get(doc, {
            include_docs: true
        })
        .then(function(doc) {
            return cb(null, doc)
        })
        .catch(function(err) {
            return cb(err)
        })
}

module.exports = {
    item: getItem
}
