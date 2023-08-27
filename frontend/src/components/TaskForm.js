import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { TaskContext } from "../TaskContext";

const TaskForm = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const { addTask } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length === 0 || description.length === 0) {
      setError("Both title and description are required.");
      return;
    }

    const newTask = {
      title: title,
      description: description,
      completed: false,
    };

    try {
      await addTask(newTask);
      setTitle("");
      setDescription("");
      setError("");
      closeModal();
    } catch (err) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred while adding the task.");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="title" className="mb-2">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="description" className="mb-2">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" size="sm" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
