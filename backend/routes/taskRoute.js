const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks).post("/", addTask);
router
  .get("/:id", getSingleTask)
  .put("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = router;
