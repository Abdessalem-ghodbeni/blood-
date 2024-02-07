import React from "react";

const InputType = ({
  value,
  onChange,
  name,
  inputType,
  labelText,
  labelForHtml,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelForHtml} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
