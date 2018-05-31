const request = require('request');
const cheerio = require('cherio');
// const fs = require('fs');
// const fs = require(‘nano-fs’);
const echo = require('./echo') //consoling

const lang = 'ru';
const url = `http://www.ucell.uz/${lang}/subscribers/roamers/`;




// echo(typeof html)



    // let html =  fs.readFile('./public/index.html', 'utf-8', (err, data)=>{
    //     if (err) console.log(err)
    //     echo(data)
    // });


    const readFile = filePath => new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
          if (err) reject(err);
          else resolve(data);
        });
      });
      
      

      const writeToFile = async (template, data, filePath) => {
        const HTML = await renderTemplate(template, data); // Render template
        await fs.mkpath(filePath); // Make sure path exists
        return fs.writeFile(`${filePath}/index.html`, HTML, { encoding: 'utf8' }); // Write to file
      };
      









// console.log(html)

// let $ = cheerio.load(html, {
//     decodeEntities: false
// });

// $('.tsr-header-global').remove();
// $('.tsr-section-header').remove();
// $('.tsr-main-nav').remove();
// $('.tsr-header-search tsr-forms').remove();
// $('.tsr-header-main').remove();
// $('#social_buttons').remove()
// $('section.tsr-secondary').remove();
// $('menu.tsr-nav-top-level').remove();
// $('span.ts-icon-chat').remove();
// $('a#btn_fb_popup').remove();
// $('div#attention').remove();
// $('div#please_wait').remove();
// $('div#error').remove();
// $('div#close').remove();
// $('div#label_space').remove();
// $('div#feedback_session_timeout').remove();
// $('div#feedback_err_internal').remove();
// $('div#feedback_err_phone').remove();
// $('div#feedback_err_name').remove();
// $('div#feedback_err_email').remove();
// $('div#feedback_err_pwd').remove();
// $('div#feedback_hint_subject').remove();
// $('div#feedback_err_message').remove();
// $('div#text_limiter_lim_fix').remove();
// $('div#text_limiter_rem').remove();
// $(' article.ucl-section-breadcrumbs').remove();
// $('section.tsr-section-footer').remove();
// $('div#attention').remove();
// $('div#error').remove();
// $('div#close').remove();
// $('div#label_space').remove();
// $('div#fb_popup_form_container').remove();

// fs.writeFile('./public/index.html', $.html(), 'utf-8', (err) => {
//     if (err) console.log(err)
//     console.log('file is writed');
// })


/*
request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {

        let $ = cheerio.load(html, {
            decodeEntities: false
        });

       $('.tsr-header-global').remove();
       $('.tsr-section-header').remove();
       $('.tsr-main-nav').remove();
       $('.tsr-header-search tsr-forms').remove();
       $('.tsr-header-main').remove();
       $('#social_buttons').remove()
       $('section.tsr-secondary').remove();
       $('menu.tsr-nav-top-level').remove();
       $('span.ts-icon-chat').remove();
       $('a#btn_fb_popup').remove();
       $('div#attention').remove();
       $('div#please_wait').remove();
       $('div#error').remove();
       $('div#close').remove();
       $('div#label_space').remove();
       $('div#feedback_session_timeout').remove();
       $('div#feedback_err_internal').remove();
       $('div#feedback_err_phone').remove();
       $('div#feedback_err_name').remove();
       $('div#feedback_err_email').remove();
       $('div#feedback_err_pwd').remove();
       $('div#feedback_hint_subject').remove();
       $('div#feedback_err_message').remove();
       $('div#text_limiter_lim_fix').remove();
       $('div#text_limiter_rem').remove();
       $(' article.ucl-section-breadcrumbs').remove();
       $('section.tsr-section-footer').remove();
       $('div#attention').remove();
       $('div#error').remove();
       $('div#close').remove();
       $('div#label_space').remove();
       $('div#fb_popup_form_container').remove();


        fs.writeFile('./public/index.html', $.html(), 'utf-8', (err) => {
            if (err) console.log(err)
            console.log('OK')
        })


    }
});
*/

