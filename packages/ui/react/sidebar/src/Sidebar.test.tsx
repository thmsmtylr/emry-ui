import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

test("renders default button with default args", () => {
  render(<Sidebar>Label</Sidebar>);
  // const buttonElement = screen.getByText(/Label/i);
  // expect(buttonElement).not.toBeNull();
});
