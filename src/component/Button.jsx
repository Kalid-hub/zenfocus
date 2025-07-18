// import React from "react";
// import classNames from "classnames";

// // Props: children, onClick, variant, size, type, disabled, className
// const Button = ({
//   children,
//   onClick,
//   variant = "primary",
//   size = "md",
//   type = "button",
//   disabled = false,
//   className = "",
// }) => {
//   const baseStyles = "rounded-xl font-semibold transition shadow-sm";

//   const variantStyles = {
//     primary: "bg-blue-600 hover:bg-blue-700 text-white",
//     secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
//     danger: "bg-red-500 hover:bg-red-600 text-white",
//     outline:
//       "border border-gray-400 text-gray-700 bg-transparent hover:bg-gray-50",
//   };

//   const sizeStyles = {
//     sm: "px-3 py-1 text-sm",
//     md: "px-5 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };

//   const combinedClass = classNames(
//     baseStyles,
//     variantStyles[variant],
//     sizeStyles[size],
//     className
//   );

//   return (
//     <button
//       className={combinedClass}
//       onClick={onClick}
//       type={type}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
