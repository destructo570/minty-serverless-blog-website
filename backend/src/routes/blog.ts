import { Hono } from "hono";

const blogRoutes = new Hono();

blogRoutes.get('/', (c) => c.text("List all blogs"));

blogRoutes.get('/:id', (c) => c.text("List blog with id"));

blogRoutes.post('/', (c) => c.text("Post a blog"));

blogRoutes.delete('/:id', (c) => c.text("Deleted a blog"));

export default blogRoutes;