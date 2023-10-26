import * as React from "react";

interface IStackProps {
  direction?: "row" | "column";
  spacing?: number;
  wrap?: boolean;
  children?: React.ReactNode;
}

const Stack: React.FunctionComponent<IStackProps> = ({
  direction = "row",
  spacing = 1,
  wrap = true,
  children,
}) => {
  const style = {
    gap: `${spacing}rem`,
    flexDirection: direction,
  };

  return (
    <div
      style={style}
      className={`flex w-fit ${wrap ? "flex-wrap" : "flex-nowrap"}`}
    >
      {children}
    </div>
  );
};

export default Stack;
