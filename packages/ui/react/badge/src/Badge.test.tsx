import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

test("renders default button with default args", () => {
  render(<Badge>Label</Badge>);
  const buttonElement = screen.getByText(/Label/i);
  expect(buttonElement).not.toBeNull();
});
