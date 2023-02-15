const express= require('express');
const app = express();
const port= 8080;
const about= require('./about.json')
const apiProducts= require('./api-products.json');
//const myProducts = apiProducts.filter(item => item.id);
const idArr = apiProducts.filter(item => item.id);

app.get('/api/products', (req, res) => {
    res.status(200).json(idArr)
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

/*
app.get('/api/products/:idArr', (req, res) => {
  const productId = req.params.idArr;

  const result = idArr.find((product) => {
    return product.id == productId
  })
  if (result !== undefined) {
    res.status(200).json(result);
  } else {
    res.status(404).send(
      `<h1>ERROR 404 Product doesn't exist!</h1>`    
    );
  }
});
*/

app.delete('/api/products/', (req, res) => {
  console.log(req.params);
  const result = idArr.filter((product) => {
    return product.id !== req.params.idArr;
  }); 
  
  res.status(200).send(result);
});
//
//////////////////////
//////////////////////
/*
app.get('/api/products/7', (req, res) => {
  res.status(200).json(idArr.filter(product => product.id !== 1));
});
*/
//////////////////////
//////////////////////
//console.log(myProducts.filter(a => a.id !== 1));

app.listen(port, () => console.log(`Listening on Port ${port}`));