import * as React from "react";
import IButtonProps from "../interfaces/IButtonProps";

const Button: React.FunctionComponent<IButtonProps> = ({
  label,
  className,
  onClick,
}: IButtonProps) => {
  return (
    <button onClick={onClick} className={`border p-2 ${className}`}>
      {label}
    </button>
  );
};

export default Button;
