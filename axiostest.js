const request = require('request');
const cheerio = require('cherio');
const echo = require('./echo'); //consoling
const scrub = require('./scrub');
const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const axios = require('axios');
const path = require('path');

const lang = 'ru';
const url = `http://www.ucell.uz/${lang}/subscribers/roamers/`;
const xPath = `./server/${lang}/index.html`;

// const write =  async(path, content) =>{
//   return await writeFile(path, content);
// }

// const  getPage = async(url)=>{
//   return await axios(url)
// }

// const make = async(path, url)=>{
//   let {data, status} = await axios(url);

//   if(status == 200){
//     await writeFile('index.html', data);
//     let parsedContent = await scrub(data);
//     await writeFile('index2.html', parsedContent);
//   }
// }

const getHtml = async(url)=>{
  let {data, status} = await axios(url);
  if(status == 200){
    return data
  }
}

const writeHtml = async(url, path, isroamer)=>{
    let html = await getHtml(url);
    if(isroamer){
      let {body, links} = await scrub(html, isroamer);
      await writeFile(path, body);
      return links;
    } else {
      let body = await scrub(html, isroamer);
      await writeFile(path, body);
    }
}


let all = async (url, xPath)=>{
  let urls = await writeHtml(url, xPath, true);
  console.log(urls)

  urls.map(async (el) => { 
   let res =  await  writeHtml(el[1], `./server/${lang}/${el[0]}`, false)
  })
}

all(url, xPath).then(r=> console.log(r))










