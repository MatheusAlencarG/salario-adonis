'use strict'

/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstrap Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass relative path from the project root.
*/

const https = require('https')
const Helpers = use('Helpers')

var certOptions = {
    key: fs.readFileSync(Helpers.appPath() + '/ssl/<you-privatekey.pem>'),
    cert: fs.readFileSync(Helpers.appPath() + '/ssl/<your-certificate.pem>'),
}

https
    .createServer(certOptions, Server.handle.bind(Server))
    .listen(Env.get('HOST'), Env.get('PORT'))