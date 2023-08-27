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
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.status === 201) {
        const data = await response.json();
        setTasks([...tasks, data]);
      } else if (response.status === 400) {
        const errorMessage = await response.json();
        alert(errorMessage.error);
      } else {
        alert("Error adding task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error adding task");
    }
  };

  const deleteTaskById = async (taskId) => {
    try {
      const response = await fetch(`${BASE_URL}/${taskId}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        setTasks(tasks.filter((task) => task._id !== taskId));
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error;
        alert(`Error deleting task: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Error deleting task");
    }
  };

  const markAsCompleted = async (taskId) => {
    try {
      const updatedTask = tasks.find((t) => t._id === taskId);
      updatedTask.completed = true;

      const response = await fetch(`${BASE_URL}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.status === 200) {
        setTasks(
          tasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.error;
        alert(`Error marking task as completed: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error marking task as completed:", error);
      alert("Error marking task as completed");
    }
  };

  const updateTask = async (taskId, updatedFields) => {
    try {
      const response = await fetch(`${BASE_URL}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFields),
      });

      if (response.status === 200) {
        const updatedTask = await response.json();
        setTasks(
          tasks.map((task) => (task._id === taskId ? updatedTask : task))
        );
      } else {
        const errorData = await response.json(); // Parse the error response as JSON
        const errorMessage = errorData.error; // Assuming your backend returns error messages under the 'error' key
        alert(`Error updating task: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Error updating task");
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
