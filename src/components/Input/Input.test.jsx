import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input test", () => {
  test("should render input", () => {
    render(<Input label="proof" />);
    expect(screen.getByText("proof")).toBeInTheDocument();
  });
});

