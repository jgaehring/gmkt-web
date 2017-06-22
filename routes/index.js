const express = require('express');
const router = express.Router();
const request = require('request');

const marketday = require('../marketday')
const apiCall = marketday.callAPI('/market_day/producers');

apiCall.then(function(response) {
    // console.log("RESPONSE:",response);
    let producerList = response.producers
      .map( (e) => e.name )
      .reduce( (acc, val) => acc = acc + val + "\n", "")
    ;
    console.log("PRODUCERS LIST: \n", producerList);
    router.get('/', function(req, res, next) {
      res.render('index', { title: "Express", producers: producerList });
    });
  })
  .catch(function(reason) {
    console.log('Handle rejected promise ('+reason+') here.');
  });

module.exports = router;
