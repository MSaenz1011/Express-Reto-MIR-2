const express= require('express');
const app = express();
const port= 8080;
const about= require('./about.json')
let apiProducts= require('./api-products.json');


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
  res.status(200).json(about);
});

app.post('/api/products', (req, res) => {
  console.log("Crearía algo si pudiera, pero no");
  res.status(200);
});

/*
app.get('/api/products/:apiProducts', (req, res) => {
  const productId = req.params.apiProducts;

  const result = apiProducts.find((product) => {
    return product.id == productId
  })
  if (result !== undefined) {
    res.status(200).json(result);
  } else {
    res.status(404).send(
      `<h1>ERROR 404 Product doesn't exist!</h1>`    
    );
  }
});*/


app.delete('/api/products/:apiProducts', (req, res) => {
  console.log("Deleting Item");
  apiProducts = apiProducts.filter((product) => {
    return product.id != req.params.apiProducts;
  }); 
  res.status(200).send(apiProducts);
});

//
//////////////////////
//////////////////////
/*
app.get('/api/products/7', (req, res) => {
  res.status(200).json(apiProducts.filter(product => product.id !== 1));
});
*/
//////////////////////
//////////////////////
//console.log(myProducts.filter(a => a.id !== 1));

app.listen(port, () => console.log(`Listening on Port ${port}`));