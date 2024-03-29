// set up express server
const express = require('express');

// inquiring the Apollo-server-express that connects express and GraphQl
const { ApolloServer } = require('apollo-server-express');

// path for interacting with file's directory easily
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');

const app = express();
// port used for the server or using localhost 3001
const PORT = process.env.PORT || 80;
require('dotenv').config({ path: 'ENV_FILENAME' });
// runs instance of Apollo Server and uses parameters

/*
 had to downgrade from apollo-server-express version 3 -> 2
*/
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(
  '/manifest.json',
  express.static(path.join(__dirname, 'build', 'manifest.json'))
);
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// sends all other request to the home page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});

