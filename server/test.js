const PouchDB = require('pouchdb')
const db = new PouchDB('http://aplchian:alex363375@localhost:5984/api-exam-aplchian/')
const dal = require('./DAL/no-sql.js')


var cb = function(err,res){
  if(err){
    return console.log(err.message)
  }
  if(res){
    return console.log(res)
  }
}

var tshirt = {
  name: "gray bag",
  description: "Beautify shirt from Hawaii",
  instock: true,
  dateavailable: new Date(),
  retailcost: 3.11,
  type: "bag",
  color: 'red'
}

var view = {
    _id: "_design/tshirts",
    views: {
        tshirts: {
            map: function(doc) {
                if (doc.type === 'tshirt') {
                    emit(doc._id)
                }
            }.toString()
        }
    }
}

dal.listItems('tshirts',2,cb)

// db.put(view).then(function(body){
//   console.log(body)
// }).catch(function(err){
//   console.log(err)
// })
