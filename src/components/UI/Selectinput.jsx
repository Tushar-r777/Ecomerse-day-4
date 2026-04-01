import React from "react";

const SelectInput = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  error = "",
  className = "",
}) => {
  return (
    <div>
      {/* Label */}
      {label && (
        <label className="inline-block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Select Box */}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-lg outline-none transition
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
          ${className}
        `}
      >
        {/* Placeholder */}
        <option disabled hidden>
          {placeholder}
        </option>

        {/* Options */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SelectInput;