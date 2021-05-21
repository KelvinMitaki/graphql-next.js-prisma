import { ContextType } from "../../../../../src/types/general";
import { MutationCreatePostArgs } from "../../generated/resolver-types";

export const createPost = (_, { values }: MutationCreatePostArgs, { prisma }: ContextType) => {
  return prisma.post.create({
    data: values
  });
};
