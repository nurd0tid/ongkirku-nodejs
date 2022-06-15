const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get('/tracking&courier=:kurir&awb=:noresi', (req, res) => {
    const kurir = req.params.kurir
    const noresi = req.params.noresi
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `https://api.binderbyte.com/v1/track?api_key=API_KEY_ANDA&courier=${kurir}&awb=${noresi}`,
      headers: { }
    };

    axios(config)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

module.exports = router
