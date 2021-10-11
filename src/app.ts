import express from "express";
import cors from "cors";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema/index";
import resolvers from "./resolvers/index";
import config from "config";
import log from "./logger";
import "./sequelize";

const host = config.get("host") as string;

const app = express();

app.use(
  cors({
    origin: (_origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: "/graphql" });

const httpServer = http.createServer(app);

const port = process.env.PORT || 3000;

httpServer.listen({ port }, () => {
  log.info(`Server listing at http://${host}:${port}`);
});
