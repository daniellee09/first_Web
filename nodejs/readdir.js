var testFolder = './data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
// node js는 파일 목록을 배열로 저장하고 있음, 이를 반복문으로 처리할 수 있을 것임
