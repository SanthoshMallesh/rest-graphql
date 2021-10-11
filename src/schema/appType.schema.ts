import { gql } from "apollo-server-express";

export default gql`
  type AppType {
    id: ID!
    name: String!
    enabled: Boolean!
  }
  extend type Query {
    getAllAppType(enabled: Boolean!): [AppType!]!
  }
`;
