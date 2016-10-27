/**
 * Created by hemanth on 10/26/2016.
 */
var express = require('express');
var app = express();
var request = require('request');

app.get('/:id/:id', function (req, res) {
    var result = {
        'body': []
    };

    request('https://api.foursquare.com/v2/venues/search?client_id=R2SON3XVMV1FPQKVN5C4CGCACA0U45VBF0MJOEJ10D1S5ZCW&client_secret=B5GUYG0GHQIHJBTLLHDDE5HMFA2ZFKQYSGGWDRXZQYDVRJIM&v=20160215&limit=5&near=kansas&query=pizza', function (error, response, body)
    {
        body = JSON.parse(body);

        co1 = body.response.venues[1].name;
        lat = body.response.venues[1].location.lat;
        log = body.response.venues[1].location.log;

        // return console.log(url);
        request('https://api.qrserver.com/v1/create-qr-code/?data='+ lat +'&amp;size=100x100', function (error, response, body) {
            if (error) {
                return console.log('Error:', error);}

            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode);}
            data = (body);
            result.body.push({"name": co1 ,"qr_locatiion": data});
            res.contentType('application/json');
            res.write(JSON.stringify(result));
            res.end();
        })
    })
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})


