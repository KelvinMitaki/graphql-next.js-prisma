import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import {} from "graphql-shield";

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};
