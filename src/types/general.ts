import { PrismaClient } from ".prisma/client";
import { Request } from "express";
export interface ContextType {
  req: Request;
  prisma: PrismaClient;
}
