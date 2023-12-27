const cors = require("cors");
const http = require("http");
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env["PORT"] || 5001;

const corsOptions = {
  origin: "http://localhost:3000",
};

const app: Express = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server!!!");
});

const server = http.createServer(app);

(async () => {
  server.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
  });
})();

module.exports = app;
