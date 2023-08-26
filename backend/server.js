const express = require("express");
const port = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoute");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
connectDB();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.listen(port, (req, res) => console.log("listening on port " + port));
