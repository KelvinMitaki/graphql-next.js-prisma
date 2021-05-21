import { ContextType } from "../../../../../src/types/general";

export const fetchPosts = (_, __, { prisma }: ContextType) => {
  return prisma.post.findMany({
    include: {
      user: true
    }
  });
};
