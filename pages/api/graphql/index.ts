import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";
import { makeExecutableSchema } from "graphql-tools";
import { ContextType } from "../../../src/types/general";
import { permissions, resolvers, typeDefs } from "./resolvers";
import { applyMiddleware } from "graphql-middleware";

const prisma = new PrismaClient();
const schema = makeExecutableSchema({ typeDefs, resolvers });
const apolloServer = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context(ctx: ContextType) {
    ctx.prisma = prisma;
    return ctx;
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};
