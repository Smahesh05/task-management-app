const Task = require("../model/userModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const addTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    const existingTask = await Task.findOne({
      title: title,
      description: description,
      completed: completed,
    });

    if (existingTask) {
      res.status(400).json({ error: "Task already exists" });
    } else {
      const task = await Task.create({
        title,
        description,
        completed,
      });
      res.status(201).json(task);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateTask);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllTasks,
  updateTask,
  deleteTask,
  getSingleTask,
  addTask,
};
