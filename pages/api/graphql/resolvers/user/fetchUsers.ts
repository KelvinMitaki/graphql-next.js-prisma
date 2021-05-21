import { ContextType } from "../../../../../src/types/general";

export const fetchUsers = (_, __, { prisma }: ContextType) => {
  return prisma.user.findMany({});
};
