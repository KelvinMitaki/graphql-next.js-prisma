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
