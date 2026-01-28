import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({ message: "Hello, World!" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
