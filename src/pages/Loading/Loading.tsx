import { FC } from "react";
import { PuffLoader } from "react-spinners";

const Loading: FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 h-full flex flex-col justify-center items-center space-y-4">
      <PuffLoader color="#3482F6" />
      <p className="text-gray-400">načítání...</p>
    </div>
  );
};

export default Loading;
