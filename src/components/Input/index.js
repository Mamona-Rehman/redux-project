import React from "react";
const varients ={
  
  Primary:" h-11 text-sm font-normal bg-[#F5F5F5] text-black w-60 py-2 px-3  mb-1  focus:outline-none focus:shadow-lg  ",
  cartinput:" h-11 text-sm font-normal border border-b-black  text-black w-60 py-2 px-3  mb-1   ",
  
};

export const Input = ({
  varient,
  type,
  name,
  value,
  inputId,
  defaultValue,
  label,
  helperText,
  onChange,
  error,
  placeholder,
  textarea
}) => {
  return (
    <div>
      {label && <label className="block text-sm text-gray-900 font-bold mb-2">{label}</label>}

      {helperText && (
        <label className="block text-sm text-gray-600">{helperText}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        id={inputId}
        onChange={onChange}
        defaultValue={defaultValue}
        textarea={textarea}
        className={` ${varients[varient]}`}
      />

      <p className="mt-2 text-sm text-red-600">{error}</p>
    </div>
  );
};
