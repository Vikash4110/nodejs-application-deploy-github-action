import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  return res.json({ message: "Hello, World! Vikash this side " });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
