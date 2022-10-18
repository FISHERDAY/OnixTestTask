const express = require('express');
const axios = require('axios');
const app = express();

const PORT = 3000;

app.get('/rates', async (req, res) => {    
    let currency = req.query.currency;
    let data = await axios.get('http://api.coincap.io/v2/rates/' + currency, {Headers : {'Content-Type' : 'application/json; charset=utf-8'}});
    if (data.data.data === undefined || !currency) res.sendStatus(404);
    else res.status(200).send({"usd" : data.data.data.rateUsd});
})

app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});