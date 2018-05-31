const scrape = require('website-scraper');

// const lang = 'ru';
// const url = `http://www.ucell.uz/${lang}/subscribers/roamers/`;

const options = {
  urls: [ 'http://ucell.uz/ru/subscribers/roamers'	// Will be saved with default filename 'index.html'
   ],
  //  urlFilter: function(url){
  //   return url.indexOf('http://ucell.uz/ru/subscribers/roamers') === 0;
  // },
  directory: './new/',
  // subdirectories: [
  //   {directory: 'img', extensions: ['.jpg', '.png', '.svg']},
  //   {directory: 'js', extensions: ['.js']},
  //   {directory: 'css', extensions: ['.css']}
  // ],
  // sources: [
  //   {selector: 'img', attr: 'src'},
  //   {selector: 'link[rel="stylesheet"]', attr: 'href'},
  //   {selector: 'script', attr: 'src'}
  // ],
  // recursive: true,
  // maxDepth: 1,
  // recursive: true,
  // maxDepth: 1,
  // prettifyUrls: true,
  // filenameGenerator: 'bySiteStructure',
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19'
    }
  }
};

// with promise
scrape(options).then((result) => {
	/* some code here */
}).catch((err) => {
	/* some code here */
});

// or with callback
scrape(options, (error, result) => {
	/* some code here */
});


