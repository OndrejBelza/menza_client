import { FC, ReactNode } from "react";

export type CardProps = {
  children?: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-white p-4 rounded-md border border-gray-100 drop-shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
