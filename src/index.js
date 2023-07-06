import http from "http";
import express from "express";
import cors from "cors";
import { Router } from "express";
import { Server } from "socket.io";

const PORT = 3001;

const router = Router();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(router);

const server = http
  .createServer(app)
  .listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}.`));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.get("/", (req, res) => {
  return res.json({ message: "hello world" });
});
