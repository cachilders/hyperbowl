///////////////    NODE MODULES    ///////////////
                   require('dotenv').config();
const express    = require('express');
const app        = express();
const http       = require('http').Server(app);
const path       = require('path');
const bodyParser = require('body-parser');
const config     = require('./server/config.json');
const redis      = require('./server/models/redis-config');

const port       = process.env.PORT || config.port;

// MOUNT middleware
app.use(express.static(path.join(__dirname, '/build/client')));
app.use(bodyParser.json());

//////////////    STATIC ROUTES    //////////////
app.get('/', (req, res) => res.redirect('/js/application.js'));


// START server
http.listen(port, () => process.stdout.write('Serving at ' + port + '\n'));

// TEST redis store connection
redis.on('error', (err) => process.stdout.write('Hm. Something went wrong with Redis: ' + err))
  .on('connect', () => process.stdout.write('Connected to Redis server.\n'));
