const express = require("express");
const { getAllBlog, addBlog, updateBlog, getById, deleteBlog, getByUserId } = require("../controller/blog-controller")
const blogRouter = express.Router();

blogRouter.get("/", getAllBlog)
blogRouter.post("/add", addBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.get("/:id", getById)
blogRouter.delete("/:id", deleteBlog)
blogRouter.post("/user", getByUserId)

module.exports = { blogRouter }