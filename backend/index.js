import express from "express";
import checkRouter from "./routes/checkRoute.js";


const app = express();
const PORT = process.env.PORT || 3000;


app.use("/api/check", checkRouter);


app.get("/", (req, res) => {
  res.send("🌐 Website Health Checker is running. Use /api/check/:domain");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
