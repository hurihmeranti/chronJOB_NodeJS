const express = require('express');
const app = express();
const cron = require('node-cron');
const fs = require('fs');

cron.schedule('* * * * *', function(){
    // console.log('sidesped running time');

    let data = "hii this is test cron job\n";

    fs.appendFile('logs.txt', data, function(err){
        if(err) throw err;

        console.log("data ditambahkan dan tercatat di logs.txt");
    });
});

app.listen(3000, function(){
    console.log('siderspeed');
});