import path from "path";
import express from "express";
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(
    path.resolve(path.join(path.dirname("./") + "/pages/index.html"))
  );
});
router.post("/", (req, res) => {
  res.send("Postei porra");
});

app.use(
  express.static(path.resolve(path.join(path.dirname("./") + "/public")))
);
app.use("/", router);
app.listen(3000, "localhost", () => {
  console.log("Listening in the door");
});
