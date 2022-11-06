const express = require('express');
const  graphqlHTTP  = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
 
}));

app.listen(5000, () => {
  console.log("Server is listing on port 5000");
})