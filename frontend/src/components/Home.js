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

  const closeModal = () => {
    setShowModal(false);
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

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header>Add new Task</Modal.Header>
        <Modal.Body>
          <TaskForm closeModal={closeModal} />
        </Modal.Body>
      </Modal>
      <TaskList />
    </>
  );
};

export default Home;
