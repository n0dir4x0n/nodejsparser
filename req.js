const request = require('request');
const cheerio = require('cherio');
const echo = require('./echo'); //consoling
const scrub = require('./scrub');
const fs = require('fs');
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const lang = 'ru';
const url = `http://www.ucell.uz/${lang}/subscribers/roamers/`;


let options = {
   url: url,
   headers: {
     'User-Agent': 'safari'
   }
 };

const write =  async(path, content) =>{
  await writeFile(path, content);
}

// let data = request(options, function (error, response, html) {
//     if (!error && response.statusCode == 200) {
//          scrub(html).then( res =>{
//           console.log(res);
//       });
//     }
// });



   request(options, (err, res, html)=>{
    if(!err && res.statusCode ==200){
      scrub(html).then(res =>{
        
      })
    }
  });




