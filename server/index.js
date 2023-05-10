const express = require('express');
import { createHandler } from 'graphql-http/lib/use/express';
const app = express();
require('dotenv').config()
const cors = require('cors')

const schemaFile = require('./schema');
const port = process.env.PORT || 4000
const connectDB = require('./db/db');

app.use(cors());

connectDB();

app.all('/graphql', createHandler({ 
    schema: schemaFile,
    graphiql: process.env.NODE_ENV === 'development' ? true : false
}));

app.listen(port, console.log('Listening to port 4000'));