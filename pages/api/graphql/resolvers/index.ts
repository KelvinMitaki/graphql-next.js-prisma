import { Resolvers } from "../generated/resolver-types";
import * as sharedSchema from "./shared-schema.graphql";
import { createUser, fetchUsers, userSchema } from "./user";

export const typeDefs = [sharedSchema, userSchema];
export const resolvers: Resolvers = {
  Query: {
    fetchUsers
  },
  Mutation: {
    createUser
  }
};
