import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { TaskContext } from "../TaskContext";
import TaskForm from "./TaskForm";

describe("TaskForm", () => {
  it("submits form data", () => {
    const addTaskMock = jest.fn();

    const contextValue = { addTask: addTaskMock };

    render(
      <TaskContext.Provider value={contextValue}>
        <TaskForm />
      </TaskContext.Provider>
    );

    const titleInput = screen.getByLabelText("Title");
    const descriptionInput = screen.getByLabelText("Description");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });
    fireEvent.click(addButton);

    expect(addTaskMock).toHaveBeenCalledWith({
      title: "Test Title",
      description: "Test Description",
      completed: false,
    });
  });
});
