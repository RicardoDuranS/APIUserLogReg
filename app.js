const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const connectDB = require("./src/config/conexionDB.js");

const db = connectDB();

const app = express();
const PORT = 3000;

// Use the router for handling routes
app.use("/", indexRouter);

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
