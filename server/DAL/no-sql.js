const PouchDB = require('pouchdb')
const db = new PouchDB('http://localhost:5984/api-test-aplchian/')
const {
    prop,
    forEach
} = require('ramda')
const buildItem = require('./helpers/buildItem.js')
const add = require('./methods/addItem.js')
const get = require('./methods/getItem.js')
const list = require('./methods/listItems.js')



module.exports = {
    addItem: add.item,
    getItem: get.item,
    listItems: list.items
}
