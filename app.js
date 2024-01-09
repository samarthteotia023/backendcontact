const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const contactroute = require("./routes/contact");
const labelroute = require("./routes/label");
app.use(cors());
app.use(express.json());
console.log(process.env.JWT_EXPIRE, "env");
mongoose
  .connect(
    "mongodb+srv://samarthteotia:RRvelar23@cluster0.tt5nvxk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(console.log("Connected o MongoDB"))
  .catch((err) => console.log(err));
app.use("/api", authRoute);
app.use("/api", contactroute);
app.use("/api", labelroute);
app.listen("8000", () => {
  console.log("Backend is running..");
});
