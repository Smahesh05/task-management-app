import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const userLogoutHandler = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const modalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="bg bg-light">
        <h3>Task Management App</h3>
        <div className="btn-wrapper">
          <Button variant="danger" size="sm" onClick={userLogoutHandler}>
            Logout
          </Button>
          <Button size="sm" onClick={modalHandler}>
            + Add new Task
          </Button>
        </div>
      </header>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>Add new Task</Modal.Header>
        <Modal.Body>
          <TaskForm />
        </Modal.Body>
      </Modal>
      <TaskList />
    </>
  );
};

export default Home;
