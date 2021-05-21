import { ContextType } from "../../../../../src/types/general";
import { QueryFetchPostArgs } from "../../generated/resolver-types";
export const fetchPost = (_, { id }: QueryFetchPostArgs, { prisma }: ContextType) => {
  return prisma.post.findUnique({
    where: {
      id
    },
    include: {
      User: true
    }
  });
};
