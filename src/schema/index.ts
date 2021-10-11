import { gql } from "apollo-server-express";
import SampleType from "./sampleType.schema";
import AppType from "./appType.schema";

const baseSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [baseSchema, AppType, SampleType];
