const url = require('url')
const adress = 'https://www.testewebsite.com/products?category=Eletronic&maxPrice=1000&minPrice=500'

const parsedUrl = new url.URL(adress)

console.log(parsedUrl);
console.log(parsedUrl.searchParams.get('category'));