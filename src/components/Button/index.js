import React from "react";

const variants = {
  primary:
    "  text-white bg-[#DB4444] font-medium text-[16px] h-16 w-60 rounded-none ",
    shopnow:" bg-black text-white text-lg rounded-none pt-2 border-1 w-28 border-b-white ",
    products:"bg-white border-b-black border-l-black  border-r-black border-t-black h-[56px] w-[227px] font-medium rounded-none text-black",
    addToCart:"text-white bg-black font-medium text-[16px] h-10 w-[270px] rounded-none ",
  secondry:" w-60  text-base font-normal text-['#494949'] ",
  danger: "bg-red-600 text-white hover:enabled:bg-red-700 focus:ring-red-500",
  naked: "hover:text-gray-600 text-gray-500 shadow-none",
  setting:"pt-2 text-black text-sm rounded"
};

const sizes = {
  Loginbutton:"h-11 w-32 text-xs  ",
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm",
  large: "px-4 py-2 text-base",
};

export const Button = ({
  className,
  variant = "primary",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center items-center border border-transparent
            rounded-md font-medium  focus:outline-none 
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
            ${variants[variant]}
            ${sizes[size]}
            `}
      {...props}
    />
  );
};
