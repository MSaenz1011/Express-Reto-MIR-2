const express= require('express');
const app = express();
const port= 8080;
const about= require('./about.json')
const apiProducts= require('./api-products.json')


app.get('/api/products', (req, res) => {
    res.status(200).json(apiProducts)
});

app.get('/info', (req, res) => {
    const date=new Date();
    res.send(`<h2>Our Store has info for ${apiProducts.length} products</h2>
    <h2>${date}</h2>
  
`);
});

app.get('/about', (req, res) => {
  res.status(200).json(about)
});



app.listen(port, () => console.log(`Listening on Port ${port}`));