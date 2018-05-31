const fs = require('fs')

// promisify is a neat tool in the util module that transforms a callback function into a promise one
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
const scrub = require('./scrub');

const writeAndRead = async (path) => {
//   await writeFile('./test.txt', 'Hello World')

  const content = await readFile(path, 'utf-8')
  
  const result = await scrub(content);
  await writeFile(path, result);
  return result
}

const write =  async(path, content) =>{
  await writeFile(path, result);
}


writeAndRead()
  .then(content => console.log(content))