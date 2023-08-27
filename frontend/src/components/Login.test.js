import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { TaskContext } from "../TaskContext";
import Home from "./Home";

test("finds any text on the home page", () => {
  const contextValue = {
    tasks: [],
    deleteTask: jest.fn(),
    markAsCompleted: jest.fn(),
  };

  render(
    <MemoryRouter initialEntries={["/user"]}>
      <Routes>
        <Route
          path="/user"
          element={
            <TaskContext.Provider value={contextValue}>
              <Home />
            </TaskContext.Provider>
          }
        />
      </Routes>
    </MemoryRouter>
  );

  const anyTextElement = screen.getByText((content, element) =>
    content.includes("Task Management App")
  );

  expect(anyTextElement).toBeInTheDocument();
});
