import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (email === "mahesh@gmail.com" && password === "1234") {
      localStorage.setItem("userEmail", email);
      navigate("/user");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Form onSubmit={submitFormHandler} className="container loginform">
      <h2>Welcome to Task Management App</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-2">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button size="sm" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
