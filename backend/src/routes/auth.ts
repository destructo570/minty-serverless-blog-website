import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const authRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string
  }
}>();

authRoutes.get("/signin", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text("List all blogs");
});

authRoutes.get("/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text("List all blogs");
});
export default authRoutes;
