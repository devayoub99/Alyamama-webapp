import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  id,
  fullWidth = false,
  noPadding = false,
}) => {
  return (
    <div
      id={id}
      className={`
          ${fullWidth ? "w-full" : "max-w-7xl"}
          mx-auto
          ${noPadding ? "" : "px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"}
          ${className}
        `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {children}
    </div>
  );
};

export default Container;
