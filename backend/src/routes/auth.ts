import { Hono } from "hono";

const authRoutes = new Hono();

authRoutes.get('/signin', (c) => c.text("User login"));

authRoutes.get('/signup', (c) => c.text("User sign up"));

export default authRoutes;