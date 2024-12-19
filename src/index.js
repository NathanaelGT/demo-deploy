import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

const initialRandomNumber = Math.random();

app.get("/", (c) => {
  return c.json({
    initialRandomNumber,
    randomNumber: Math.random(),
  });
});

serve(
  {
    fetch: app.fetch,
    port: process.env.PORT || 8080,
    hostname: "0.0.0.0",
  },
  ({ address, port }) => {
    console.log(`Server running on ${address}:${port}`);
  }
);
