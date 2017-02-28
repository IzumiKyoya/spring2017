const fs =require('fs');

const ws =fs.createReadStream('stream.txt',{encoding:'utf8'});

rs.on('data',function(data){
  console.log('data>>>'+data);

});

rs.on('end',function(){
  console.log(">>> END")
});
