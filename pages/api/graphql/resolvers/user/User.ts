import { ContextType } from "../../../../../src/types/general";
import { MutationCreateUserArgs } from "../../generated/resolver-types";
import { generatePasswordAsync } from "../../utils/password";
export const createUser = async (
  _,
  { values }: MutationCreateUserArgs,
  { prisma }: ContextType
) => {
  const { email, password } = values;
  const emailExists = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (emailExists) {
    throw new Error("User with that email already exists");
  }
  return prisma.user.create({
    data: { ...values, password: await generatePasswordAsync(password) }
  });
};
