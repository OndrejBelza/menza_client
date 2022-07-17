import { FC } from "react";
import { FcHighPriority } from "react-icons/fc";

export type ErrorPros = {
  error?: string;
};

const Error: FC<ErrorPros> = ({ error }) => {
  return (
    <div className="max-w-5xl mx-auto h-full mt-10 flex flex-col justify-center items-center space-y-4">
      <FcHighPriority className="h-24 w-24" />
      <p>{error}</p>
    </div>
  );
};

export default Error;
