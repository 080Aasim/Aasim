import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import "dotenv/config";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import connectDb from "./config/mongodb.js";

const app = express();
const port = process.env.PORT || 4000;
connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server running at ${port}`));

export default app;
