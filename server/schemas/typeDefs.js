const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }
  type Query {
    getUser: [User]
  }
`;

module.exports = typeDefs;
