import bcrypt from "bcrypt";
export const generatePasswordAsync = (plainTextPassword: string) =>
  bcrypt.hash(plainTextPassword, 10);
export const compareHashPassword = (plainTextPassword: string, hash: string) =>
  bcrypt.compare(plainTextPassword, hash);
