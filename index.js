const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const PORT = 8080;

const app = express();

const url = 'https://meduza.io/'

axios(url).then(response=> {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.BlockTitle-root',html).each(function(){
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url,
        })
    })
    console.log(articles)
}).catch(err=>err.message)



app.listen(PORT, ()=>'server running on port 8080');