const PouchDB = require('pouchdb')
const db = new PouchDB('http://localhost:5984/api-test-aplchian/')
const {addItem} = require('./server/DAL/no-sql.js')
const {forEach} = require('ramda')

var tshirts = [
  {
    "name": "Hawaiian Shirt",
    "description": "Such a cool shirt",
    "instock": true,
    "dateavailable": new Date('Jan 9, 2016'),
    "retailcost": 10.99,
    "type": "tshirt",
    "color": "green"
  },
  {
    "name": "Red Shirt",
    "description": "It's So RED!",
    "instock": true,
    "dateavailable": new Date('Jan 10, 2016'),
    "retailcost": 2.99,
    "type": "tshirt",
    "color": "red"
  },
  {
    "name": "Green Shirt",
    "description": "It's So Green!",
    "instock": true,
    "dateavailable": new Date('Jan 10, 2017'),
    "retailcost": 22.99,
    "type": "tshirt",
    "color": "green"
  },
  {
    "name": "Blue Shirt",
    "description": "It's So Blue!",
    "instock": false,
    "dateavailable": new Date('Jan 1, 2012'),
    "retailcost": 9.99,
    "type": "tshirt",
    "color": "Blue"
  },
  {
    "name": "Teal Shirt",
    "description": "It's So Teal!",
    "instock": false,
    "dateavailable": new Date('Jan 1, 2013'),
    "retailcost": 99.99,
    "type": "tshirt",
    "color": "Teal"
  },
]

var views = [
  {
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
]

const cb = function(err,res){
  if(err){
    return console.log(err.message)
  }
  if(res){
    return console.log(res)
  }
}

const addDoc = function(doc){
  addItem(doc,cb)
}


db.bulkDocs(views).then(function(body){
  console.log('Views Loaded')
}).catch(function(err){
  console.log('Error loading views!',err.message)
})

forEach(addDoc,tshirts)
