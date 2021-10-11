import AppType from "../models/appType.model";

export default {
  Query: {
    async getAllAppType(_: any, args: any) {
      const appType =
        typeof args.enabled === "boolean"
          ? await AppType.findAll({
              attributes: ["id", "name", "enabled"],
              where: {
                enabled: args.enabled,
              },
            })
          : await AppType.findAll({
              attributes: ["id", "name", "enabled"],
            });

      return appType;
    },
  },
};
