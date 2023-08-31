import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders default button with default args", () => {
  render(<Button>Button CTA</Button>);
  const buttonElement = screen.getByText(/Button CTA/i);
  expect(buttonElement).not.toBeNull();
});
