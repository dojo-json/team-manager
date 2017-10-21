const bodyParser = require('body-parser');
const compress   = require('compression');
const express    = require('express');
const helmet     = require('helmet');
const logger     = require('morgan');
const path       = require('path');

// grab the port from an environment variable, or assign a default(dev) port
const port = process.env.PORT || 8000;
const app = express();

// Compress Response Body
// https://github.com/expressjs/compression
app.use(compress());

// Basic Security Module
// https://github.com/helmetjs/helmet
app.use(helmet());

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTTP Request Logger
// https://github.com/expressjs/morgan
app.use(logger('dev'));

// Serve static content
app.use(express.static(path.resolve('dist')));

// require database configuration
require('./server/config/database');

// Require routing
app.use('/api', require('./server/config/routes'));
// Catch all route
app.use(require('./server/config/routes/catch-all.routes'));

// Spin up the server
app.listen(port, () => console.log(`server listening on port ${ port }`));
