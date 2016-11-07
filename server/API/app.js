const express = require('express')
const app = express()
const dal = require('../DAL/no-sql.js')
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')

const port = 3020

app.use(bodyParser.json())

app.get('/tshirt/:id',function(req,res,next){
  dal.getItem(req.params.id,function(err,body){
    if(err){
      var getError = new HTTPError(404,'Item Not Found',{error: err.message})
      next(getError)
    }
    if(body){
      res.send(body)
    }
  })
})

app.get('/tshirts',function(req,res,next){
  var limit = req.query.limit || 10
  dal.listItems('tshirts',limit,function(err,body){
    if(err){
      var listError = new HTTPError(500,'Something went wrong on our end!',{error: err.message})
      next(listError)
    }
    if(body){
      res.send(body)
    }
  })
})

app.post('/tshirt',function(req,res,next){
  dal.addItem(req.body,function(err,body){
    if(err){
      var addError = new HTTPError(400,'Not able to post!',{error: err.message})
      next(addError)
    }
    if(body){
      return res.send(body)
    }
  })
})

app.listen(port,function(err){
  if(err) {
    return console.log(err.message)
  }else{
    return console.log(`app is listening on port: ${port}`)
  }
})

app.use(function(err, req, res, next) {
    res.send(err)
})
