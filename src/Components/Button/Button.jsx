import React from "react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) {
  const baseClasses =
    "font-semibold rounded-lg transition duration-300 ease-in-out cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-md hover:shadow-xl transform hover:scale-105",
    secondary:
      "bg-gray-800 hover:bg-gray-900 text-white shadow-md hover:shadow-xl",
    outline:
      "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white",
  };


  const sizes = {
    sm: "px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5 md:text-base",
    md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-3.5 md:text-lg",
    lg: "px-5 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg md:px-9 md:py-4 md:text-xl",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
