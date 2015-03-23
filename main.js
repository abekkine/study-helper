'use strict';
var express = require('express');
var swig = require('swig');
var app = express();
var test_template = swig.compileFile('test.template');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res) {
    var test_html = test_template({
        message: 'this is test html'
    });

    res.end(test_html);
});

app.listen(8081);
