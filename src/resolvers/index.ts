const { GraphQLDateTime } = require("graphql-iso-date");

const customScalarResolver = {
  Date: GraphQLDateTime,
};

import appType from "./appType.resolvers";
import sampleType from "./sampleType.resolvers";

export default [customScalarResolver, appType, sampleType];
