import React from "react";
import { useField } from "formik";

export function InputField({ name, children }) {
  const [field] = useField(name);
  const child = React.Children.only(children);
  return React.cloneElement(child, {
    ...field,
  });
}
