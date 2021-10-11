import SampleType from "../models/sampleType.model";

export default {
  Query: {
    async getAllSampleType(_: any, args: any) {
      const sampleType =
        typeof args.enabled === "boolean"
          ? await SampleType.findAll({
              attributes: ["id", "name", "enabled"],
              where: {
                enabled: args.enabled,
              },
            })
          : await SampleType.findAll({
              attributes: ["id", "name", "enabled"],
            });

      return sampleType;
    },
  },
};
