const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');
const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors());

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/api',apiRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));