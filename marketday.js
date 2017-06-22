const http = require('http');
const _ = require('underscore');

const baseURL = 'http://unsqgreenmarket.grownyc.org/api/v1';

const marketProto = {
  callAPI: function callAPI(endpoint) {
    return new Promise( function(resolve, reject) {
      let url = baseURL + endpoint;
      console.log(url);
      http.get(url, function(res) {
        let body = '';
        res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end', function(){
          body = JSON.parse(body);
          console.log("Got a from response from the marketday API");
          resolve(body);
        });
      }).on('error', function(e){
        console.log("Got an error: ", e);
      });
    })
  },
}

const marketFactory = function marketFactory(options) {
    return _.extend(Object.create(marketProto), options)
};

let marketday = marketFactory()

module.exports = marketday;
