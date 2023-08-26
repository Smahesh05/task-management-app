import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const BASE_URL = "http://localhost:5000/api/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getAllTask = async () => {
    try {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      alert("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    getAllTask();
  }, []);

  const addTask = async (newTask) => {
    try {
      const res = await axios.post(BASE_URL, newTask);
      setTasks([...tasks, res.data]);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;
        alert(errorMessage);
      } else {
        alert("Error adding task:", error);
      }
    }
  };

  const deleteTaskById = async (taskId) => {
    try {
      await axios.delete(`${BASE_URL}/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      alert("Error deleting task:", error);
    }
  };

  const markAsCompleted = async (taskId) => {
    try {
      const updatedTask = tasks.find((t) => t._id === taskId);
      updatedTask.completed = true;

      await axios.put(`${BASE_URL}/${taskId}`, updatedTask);
      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
    } catch (error) {
      alert("Error marking task as completed:", error);
    }
  };

  const updateTask = async (taskId, updatedFields) => {
    try {
      const updatedTask = await axios.put(
        `${BASE_URL}/${taskId}`,
        updatedFields
      );
      setTasks(
        tasks.map((task) => (task._id === taskId ? updatedTask.data : task))
      );
    } catch (error) {
      alert("Error updating task:", error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTaskById, markAsCompleted, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
