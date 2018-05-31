const cherio = require('cherio');
const path = require('path');

module.exports = async (html, isroamer) => {
  let $ = await cherio.load(html, {
    decodeEntities: false
  });
  
  // await $('link').remove();
  // await  $('<link rel="stylesheet" href="../css/main_rwd.min.css">').insertAfter('title')
  
  await $('link').each(function(i, elem){
        let css =  $(this).attr('href');
         $(this).attr('href', css.slice(1));
  })

  await $('img').each(function(){
    let img =  $(this).attr('src')
   
    let fileName = path.basename(img);
    // console.log(fileName)
    $(this).attr('src', 'images/' + fileName);
  })
  
  await $('.tsr-header-global').remove();
  await $('.tsr-section-header').remove();
  await $('.tsr-main-nav').remove();
  await $('.tsr-header-search tsr-forms').remove();
  await $('.tsr-header-main').remove();
  await $('#social_buttons').remove()
  await $('section.tsr-secondary').remove();
  await $('menu.tsr-nav-top-level').remove();
  await $('span.ts-icon-chat').remove();
  await $('a#btn_fb_popup').remove();
  // await $('div#attention').remove();
  // await $('div#please_wait').remove();
  // await $('div#error').remove();
  // await $('div#close').remove();
  // await $('div#label_space').remove();
  // await $('div#feedback_session_timeout').remove();
  // await $('div#feedback_err_internal').remove();
  // await $('div#feedback_err_phone').remove();
  // await $('div#feedback_err_name').remove();
  // await $('div#feedback_err_email').remove();
  // await $('div#feedback_err_pwd').remove();
  // await $('div#feedback_hint_subject').remove();
  // await $('div#feedback_err_message').remove();
  // await $('div#text_limiter_lim_fix').remove();
  // await $('div#text_limiter_rem').remove();
  await $('article.ucl-section-breadcrumbs').remove();
  await $('section.tsr-section-footer').remove();
  // await $('div#attention').remove();
  // await $('div#error').remove();
  // await $('div#close').remove();
  // await $('div#label_space').remove();
  await $('div#fb_popup_form_container').remove();
  // await $('script').remove();
  await $('a.page-link').removeAttr('href');
   await  $('script').each(function (i, elem){
    let source =  $(this).attr('src');
    if(source !=undefined){
      $(this).attr('src',  source.slice(1));
    }
  })

  if(isroamer){
    let links = new Array();
    await $('a').each(function (i, elem) {
      if($(this).attr('href')!== undefined){
        let alink = $(this).attr('href');
        let link = `http://www.ucell.uz${alink}`;
        let fileName = path.basename(link) + '.html'; 
        // links.set(fileName, link);
        links.push([fileName, link]);
        $(this).attr('href', fileName);
      }
    });
  
    let body = await $.html();
    let result = {
      links,
      body
    }
   
    return await result;
  } else {
    return await $.html();
  }
}