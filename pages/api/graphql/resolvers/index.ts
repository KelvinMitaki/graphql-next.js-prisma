import { rule, shield } from "graphql-shield";
import { ContextType } from "../../../../src/types/general";
import { Resolvers } from "../generated/resolver-types";
import { fetchPost, fetchPosts } from "./post";
import * as sharedSchema from "./shared-schema.graphql";
import { createUser, fetchUsers, userSchema } from "./user";

export const typeDefs = [sharedSchema, userSchema] as unknown as string;
export const resolvers: Resolvers = {
  Query: {
    fetchUsers,
    fetchPost,
    fetchPosts
  },
  Mutation: {
    createUser
  }
};

const isValidUser = rule()(async (prt, args, { prisma }: ContextType, info) => {
  return !!(await prisma.user.findUnique({
    where: {
      id: args.id
    }
  }));
});

export const permissions = shield({
  Mutation: {
    createPost: isValidUser
  }
});
