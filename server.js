const express = require('express');
const  {graphqlHTTP}= require('express-graphql');
const schema = require('./schema/schema')
const connectDB = require('./db');
const app = express();

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true,
}));


// Database Connection
connectDB('mongodb://localhost:27017/graphQL')
.then(() => {
  console.log('DataBase is Connected')
  app.listen(4000, () => {
    console.log('Server is Listening on port 4000');
})
})
.catch(error => {
     console.log(error)
})
