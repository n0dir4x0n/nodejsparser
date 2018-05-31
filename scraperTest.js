const  scrape = require('website-scraper');

const lang = 'ru';
const url = [`http://ucell.uz/ru/subscribers/roamers/roaming_sms_bundles`,

    'http://www.ucell.uz/ru/subscribers/roamers/closer_to_neighbors',
    'http://www.ucell.uz/ru/subscribers/roamers/discounts_for_roaming_during_hajj_and_umrah',
    'http://www.ucell.uz/ru/subscribers/roamers/roaming_internet_packages' ,
    'http://www.ucell.uz/ru/subscribers/roamers/zonal_roaming',
    'http://www.ucell.uz/ru/subscribers/roamers/unlimited_internet_in_roaming' ,
    'http://www.ucell.uz/ru/subscribers/roamers/roaming_sms_bundles' ,
    'http://www.ucell.uz/ru/subscribers/roamers/summer_holidays' ,
    'http://www.ucell.uz/ru/subscribers/roamers/for_visitors/tcell_visitors' ,
    'http://www.ucell.uz/ru/subscribers/roamers/for_visitors/kcell_visitors' ,
    'http://www.ucell.uz/ru/subscribers/roamers/for_ucell_subscribers_abroad/tcell_subscribers' ,
    'http://www.ucell.uz/ru/subscribers/roamers/for_ucell_subscribers_abroad/roaming_kazakhstan' ,
	  'http://www.ucell.uz/ru/subscribers/roamers/for_ucell_subscribers_abroad/payment_without_borders' 
	
	]

const  options = {
  urls: url,
  directory: `./last/`
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
