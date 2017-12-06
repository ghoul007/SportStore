    'use strict';

    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    var express = require('express');
    var http = require('http');
    var path = require('path');
    var app = express();

    var config = {
        port: 8080,
        root: path.normalize(path.join(__dirname, './dist'))
    }

    app.use(express.static(config.root));
    app.route('/*')
        .get(function(req, res) {
            res.sendFile(path.join(config.root, 'index.html'));
        });

    http.createServer(app).listen(config.port, function() {
        console.log('hello-docker server listening on %d, in %s mode',
            config.port, app.get('env'));
    });

    exports = module.exports = app;