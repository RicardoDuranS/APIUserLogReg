const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = 3000;

// Use the router for handling routes
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
