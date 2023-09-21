import React from "react";

const Select = ({ label, options = [], placeholder, ...restProps }) => {
  return (
    <section className="form-group">
      <label className="form-label">{label}</label>
      <select data-testid="Select" className="form-select" {...restProps}>
        <option value="" hidden disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Select;
