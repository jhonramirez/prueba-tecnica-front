import React from "react";
import NumberFormat from "react-number-format";

const InputNumber = ({ field, label }) => {
  const handleIsAllowed = ({ value }) => {
    if (value.length > 11) {
      return false;
    }
    return true;
  };
  return (
    <section className="form-group">
      <label className="form-label">{label}</label>
      <NumberFormat
        className="form-control"
        {...field}
        thousandSeparator={true}
        isNumericString={true}
        allowNegative={false}
        isAllowed={handleIsAllowed}
      />
    </section>
  );
};

export default InputNumber;
