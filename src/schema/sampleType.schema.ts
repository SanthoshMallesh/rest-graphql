import { gql } from "apollo-server-express";

export default gql`
  type SampleType {
    id: ID!
    name: String!
    enabled: Boolean!
  }
  extend type Query {
    getAllSampleType(enabled: Boolean!): [SampleType!]!
  }
`;
