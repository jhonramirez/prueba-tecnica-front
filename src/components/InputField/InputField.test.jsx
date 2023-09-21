import React from "react";
import { useField } from "formik";
import { render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

jest.mock("formik");

const FakeInput = ({ hasError, ...restProps }) => (
  <input data-hasError={hasError} {...restProps} />
);

test("renders correctly", () => {
  const field = { "data-testid": "foo", id: "test-id" };
  useField.mockReturnValue([field, {}]);

  render(
    <InputField name="bar">
      <FakeInput />
    </InputField>
  );

  const input = screen.queryByTestId("foo");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("id", "test-id");

  expect(useField).toHaveBeenCalledWith("bar");
});
