const PouchDB = require('pouchdb')
const db = new PouchDB('http://localhost:5984/api-exam-aplchian/')
const {
    prop,
    forEach
} = require('ramda')
const buildItem = require('../helpers/buildItem.js')



const addItem = (doc, cb) => {
    var hasKeys = true
    var status = ''
    const keys = ['name','description','instock','retailcost','dateavailable','type']

    function missingKey(item) {
        if (prop(item)(doc) === undefined) {
            hasKeys = false
            status = item
        }
    }

    forEach(missingKey, keys)

    if (!hasKeys) {
        return cb(new Error(`400 Missing ${status} property within data`))
    }

    if (prop('_rev')(doc)) {
        return cb(new Error('400 _rev not allowed'))
    }

    if (prop('_id')(doc)) {
        return cb(new Error('400 _id not allowed'))
    }

    doc = buildItem(doc)

    db.put(doc)
    .then(function(body){
      return cb(null,body)
    })
    .catch(function(err){
      return cb(err)
    })
}

module.exports = {
  item: addItem
}
