import React from "react";

const Input = ({ label, ...restProps }) => {
  return (
    <section className="form-group">
      <label className="form-label">{label}</label>
      <input className="form-control" {...restProps} />
    </section>
  );
};

export default Input;
