import React from "react";
import App from "../App";

import { render, screen, fireEvent } from "@testing-library/react";

test("Loads title, text input, and submit button.", () => {
  render(<App />);
  screen.getByText("ToDo List");
  screen.getByPlaceholderText("Todo name");
  screen.getByText("Submit");
});

test("User can create and submit a new todo.", () => {
  render(<App />);
  const todoContent = "Here is a new TODO"
  const input = screen.getByPlaceholderText("Todo name");
  const button = screen.getByText("Submit");
  
  // Create new TODO
  fireEvent.change(input, { target: { value: todoContent} });
  fireEvent.click(button);

  // Test it exists
  screen.getByText(todoContent);
});

test("User can delete a TODO", () => {
  render(<App />);
  const todoContent = "Learn how to write React Tests"
  const input = screen.getByPlaceholderText("Todo name");
  const button = screen.getByText("Submit");

  // Create new TODO
  fireEvent.change(input, { target: { value: todoContent } });
  fireEvent.click(button);

  // Delete the TODO
  const deleteButton = screen.getByText("X")
  fireEvent.click(deleteButton)

  // Test it doesnt exist
  expect(screen.queryByText(todoContent)).toBeNull()
});