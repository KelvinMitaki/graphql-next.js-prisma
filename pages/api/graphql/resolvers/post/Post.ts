import { ContextType } from "../../../../../src/types/general";
import { QueryPostArgs } from "../../generated/resolver-types";
export const fetchPost = (_, { id }: QueryPostArgs, { prisma }: ContextType) => {
  return prisma.post.findUnique({
    where: {
      id
    },
    include: {
      User: true
    }
  });
};
