import React from "react";
import Todo from "../Todo";

import { render, screen } from "@testing-library/react";

test("Todo shows name", () => {
  const todoName = "A New Todo Name"
  render(<Todo name={todoName}/>)
  screen.getByText(todoName)
});