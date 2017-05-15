const express = require('express')
const graphqlHTTP = require('express-graphql')
const Schema = require('./schema')

const PORT = 3000

const app = express()

const graphqlOptions = {  schema: Schema,
                          pretty: true
                        };
                        
app.use('/graphql', graphqlHTTP(graphqlOptions))

const server = app.listen(PORT, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('GraphQL listening at http://%s:%s', host, port)
})
