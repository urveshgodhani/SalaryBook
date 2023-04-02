const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const routes = require("./routes");
const error = require("./middleware/error");
dotenv.config({ path: "./config/.env" });
connectDB();

app.use(express.json());
app.use("", routes);

app.use(error);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
