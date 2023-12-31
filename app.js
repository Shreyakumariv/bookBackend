
const express = require("express")
const mongoose = require("mongoose")
const router = require("./routes/userRoutes");
const { blogRouter } = require("./routes/blog-routes");
const cors = require("cors");
require("dotenv").config()
const port =process.env.PORT || 7000
const app = express();
app.use(cors());
// http:/localhost:7000/api/user
app.use(express.json())
app.use("/api/user", router)
app.use("/api/blog", blogRouter)

mongoose.connect("mongodb+srv://shreyakumariv:Amit123@cluster0.qvvpwnr.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(port))
    .then(() => console.log("connect the database"))
    .catch((err) => console.log("err"));
