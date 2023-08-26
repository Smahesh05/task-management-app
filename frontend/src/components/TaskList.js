import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { TaskContext } from "../TaskContext";

const TaskList = () => {
  const { tasks, markAsCompleted, deleteTaskById, updateTask } =
    useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [editedTask, setEditedTask] = useState({});
  const [description, setDescription] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);

  const handleMarkCompleted = (taskId) => {
    markAsCompleted(taskId);
  };

  const handleDeleteTask = (taskId) => {
    deleteTaskById(taskId);
  };

  const handleUpdateTask = (task) => {
    setEditedTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    const updatedTask = {
      title: title,
      description: description,
      completed: false,
    };
    updateTask(editedTask._id, updatedTask);
    setShowEditModal(false);
  };

  return (
    <div className="container card-list">
      {tasks.map((task) => (
        <div
          key={task._id}
          className={task.completed ? "completed-task card" : "card"}
        >
          <div>
            <h3 className={task.completed ? "completed-title" : ""}>
              {task.title}
            </h3>
            <p>{task.description}</p>
          </div>
          <div className="btn-wrapper">
            {!task.completed && (
              <Button
                variant="success"
                size="sm"
                onClick={() => handleMarkCompleted(task._id)}
              >
                Mark as completed
              </Button>
            )}
            <>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDeleteTask(task._id)}
                className="ml-2"
              >
                Delete
              </Button>

              <Button
                variant="info"
                size="sm"
                className="ml-2"
                onClick={() => handleUpdateTask(task)}
              >
                Edit
              </Button>
            </>
          </div>
        </div>
      ))}

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="Title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TaskList;
