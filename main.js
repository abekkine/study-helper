'use strict';
var express = require('express');
var swig = require('swig');
var app = express();
var index_template = swig.compileFile('index.template');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/sounds', express.static(__dirname + '/sounds'));
app.use('/templates', express.static(__dirname + '/templates'));

app.get('/', function(req, res) {
    var index_html = index_template({});

    res.end(index_html);
});

app.listen(8081);
