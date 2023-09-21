import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Select from "./Select";
import userEvent from "@testing-library/user-event";

describe("Select test", () => {
  const BASIC_OPTIONS = [
    { label: "foo", value: "foo" },
    { label: "bar", value: "bar" },
  ];
  test("should render component", () => {
    render(<Select placeholder="placeholder" />);
    expect(screen.getByText("placeholder")).toBeInTheDocument();
  });

  test("renders the given options", () => {
    const onChange = jest.fn();
    render(<Select onChange={onChange} options={BASIC_OPTIONS} />);
    const select = screen.getByTestId("Select");

    userEvent.selectOptions(select, "foo");

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: BASIC_OPTIONS[0].value,
        }),
      })
    );
  });
});
