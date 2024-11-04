const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://jacobleon2117:SHhRMtHEqgBAY2aP@cluster0.bsvgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});