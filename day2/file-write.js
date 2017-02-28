const fs = require('fs');
fs.writeFile(__dirname+'/hello.txt','Nodeはじめました。\n',function(err){if(err)return console.log("Error!")});
