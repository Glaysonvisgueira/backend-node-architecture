import http from "http";
import express from "express";
import cors from "cors";
import { Router } from "express";

const PORT = 0;

const router = Router();
const server = express();
server.use(
  cors({
    origin: "*",
  })
);

server.use(express.json());
server.use(router);

http
  .createServer(server)
  .listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}.`));

server.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});
