const express = require('express');
const app = express();
const mongoClient = require("mongodb").MongoClient;
const port = 3000;
const url = 'mongodb+srv://vunyuya:70051461@cluster0-zmndz.mongodb.net/test?retryWrites=true';

app.get('/testConnection', (req, res) => {
       
    mongoClient.connect(url, function(err, client){        
        client.db("Goods").collection("test").find({}).toArray(function(err, goods){
            res.send(goods);            
            client.close();
        });
    });
});

app.listen(port, function () {
    console.log('Listening on port 3000');
});