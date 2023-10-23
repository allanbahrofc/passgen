import path from "path";
import express from "express";
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.resolve(path.join(path.dirname("./") + "/views/index.html")));
});

app.use("/", router);
app.listen(3000, "localhost", () => {
  console.log("Listening in the door");
});
