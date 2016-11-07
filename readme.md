# API Exam

##setup
 ```npm install```


  ``` node buildDB.js ``` (populates DB)

##endpoints

#### Get T-Shirt By ID:

 ** *GET* ```/tshirt/:id``` **

ex.  ```http://localhost:3020/tshirt/tshirt_Green_Shirt```

#### List T-Shirts:
** *GET* ```/tshirts/``` **

optional: ``` ?limit=5```

ex.  ```http://localhost:3020/tshirts/?limit=5```


#### Add New T-Shirt:
** *POST* ```/tshirt/``` **

ex.  ```http://localhost:3020/tshirt/```

*json example*
```
{
  "name": "Turqouise Shirt",
  "description": "It's So Turqious!",
  "instock": false,
  "dateavailable": ""2011-01-01T05:00:00.000Z"",
  "retailcost": 99.99,
  "type": "tshirt",
  "color": "turqious"
}

```
