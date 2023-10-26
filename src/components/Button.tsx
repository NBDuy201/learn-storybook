import * as React from "react";
import IButtonProps from "../interfaces/IButtonProps";

const Button: React.FunctionComponent<IButtonProps> = ({
  label,
  className,
  handleClick,
}: IButtonProps) => {
  return (
    <button onClick={handleClick} className={`border p-2 ${className}`}>
      {label}
    </button>
  );
};

export default Button;
