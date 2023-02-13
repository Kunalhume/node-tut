// const app = require('./app')
// // console.log(app);
// // console.log(app.x);
// // console.log(app.y);
// const arr=[2,4,6,8,10];
// // console.log(arr[4]);

// let rv =arr.filter((item)=>{
//   // console.log(item)
//   return item>=3;
// })
// console.log(rv);

// const fs = require('fs');
// fs.writeFileSync("HelloKunal1.txt","Kunal your on right way Great way -----> *You Can Do It*")

// console.log(">>>",__dirname,"<<<");
// console.log(">>>",__filename,"<<<");

// const ks = require('fs');
// ks.writeFileSync("kodec.txt","Welcome Kodec in Node JS Learning ");

// Optimize way
// const king = require('fs').writeFileSync;
// king("Hey.txt","Hey, Buddy");

// ------------> Lecture -7 <---------------

// const http = require("http");

// const dataControl =(req, resp)=> {
//   resp.write("<h1>Hello Kunal, Well Done! Buddy</h1>");
//   resp.end();
// }

// http.createServer(dataControl).listen(4500);

// http.createServer((req,resp)=> {
//   resp.write("<h1>Hello Kunal, Well Done! Buddy Nice @Kunal</h1>");
//   resp.end();
// }).listen(4500);


// -------------> Lecture - 8 <------------------
// Learning package.json File in Node JS

// const colors= require('colors');
// console.log("package.json".green);


// --------------> Lecture - 9  <-------------------
// Don't Delete package.json file

// While uploading in GitHub
// Don't Push node_modules folder 
// for this create " .gitignore " and add /node_modules


// ----------------> Lecture - 10 <---------------------
// Nodemon(Node JS) package same as LiveServer(HTML) 
// Command : ---> nodemon .\index.js

// console.log("Hey, Kunal");
// console.log(246+465);


// ------------------> Lecture - 11 <----------------------
// Making Simple API 

// const http = require('http');
// const { type } = require('os');

// // exporting data form another file
// const data= require('./data'); 

// http.createServer((req,resp)=>{
//   resp.writeHead(200,{'Content-Type':'application\json'});
//   resp.write(JSON.stringify(data));
//   resp.end();
// }).listen(4500);


// -------------------> Lecture - 12 <----------------------
//Taking Input from Command Prompt

// console.log(process.argv[2]);

// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add'){
//   fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//   fs.unlinkSync(input[3]);
// }
// else{
//   console.log("Invalid Input")
// }


// ---------------------> Lecture - 13 <-------------------------
// Display file from folder

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

// Create multiple file using code 
// for(i=0;i<5;i++){
//   // fs.writeFileSync("Hello"+i+".txt","Sample text file");
//   fs.writeFileSync(dirPath+`/Hello${i}.txt`,"Sample text file");
// }

// fs.readdir(dirPath,(error,files)=>{
//   // console.warn(files);   // In Array Format
//   files.forEach((item)=>{
//       console.log(item);  
//   })
// });

//Delete Files 

// const fs = require('fs');
// const path = require('path');
// // Delete Multiple files in once 
// const dirPath = path.join(__dirname,'files');
// for(i=0;i<5;i++){
//   fs.unlinkSync(dirPath+`/Hello${i}.txt`);
// }


// ----------------------> Lecture - 14 <----------------------------
// CRUD with File System 

const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');

// Making const of file Path 
const filePath =`${dirPath}/Buddy.txt`; 

// fs.writeFileSync(filePath,"Hey Buddy");

// IMPORTANT :- Without 'utf-8' we see file in buffer format 
// fs.readFile(filePath,'utf-8',(error,item)=>{
//   console.log(item);
// })

// Adding or Appending data in File 
// fs.appendFile(filePath," Hey Kunal",(err)=>{
//   if(!err) console.log("file is updated");
// });


// Rename the File 
// fs.rename(filePath,`${dirPath}/Bro.txt`,(err)=>{
//   if(!err) console.log("file is renamed");
// });


//Delete File Operation 
// fs.unlinkSync(`${dirPath}/Bro.txt`);


// --------------------> Lecture - 15 <--------------------------
// Asynchronous Basics in Node JS
  
