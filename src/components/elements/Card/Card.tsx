import { FC, ReactNode } from "react";

export type CardProps = {
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-md border border-gray-100 drop-shadow-md">
      {children}
    </div>
  );
};

export default Card;
