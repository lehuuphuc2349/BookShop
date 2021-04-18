require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/connection");
const bookRoutes = require("./routes/bookRoutes");

connectDatabase();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`App running on port:${PORT}`);
});
