import { PrismaClient } from "@prisma/client";
import { ApolloServer, makeExecutableSchema } from "apollo-server-micro";
import {} from "graphql-shield";
import { ContextType } from "../../../src/types/general";
import { resolvers, typeDefs } from "./resolvers";

const prisma = new PrismaClient();
const schema = makeExecutableSchema({ typeDefs, resolvers });
const apolloServer = new ApolloServer({
  schema,
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
