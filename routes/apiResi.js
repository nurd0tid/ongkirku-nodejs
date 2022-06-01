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

// var options = {
//   method: 'GET',
//   url: 'https://api.aftership.com/v4/trackings/anteraja/10004709727433',
//   headers: {
//     'Content-Type': 'application/json',
//     'aftership-api-key': '9f72c343-eb94-479f-9c1a-9ee95054eb39'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

module.exports = router