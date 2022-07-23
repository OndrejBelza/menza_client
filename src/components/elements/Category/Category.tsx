import { FC, useMemo } from "react";

export type CategoryProps = {
  name: string;
  width?: string;
};

const getColors = (name: string): { background: string; text: string } => {
  if (name === "Polévka")
    return {
      background: "bg-blue-100",
      text: "text-blue-400",
    };

  if (name === "Bezmasá jídla")
    return {
      background: "bg-green-100",
      text: "text-green-400",
    };

  if (name === "Moučníky")
    return {
      background: "bg-orange-100",
      text: "text-orange-400",
    };

  if (name === "Hlavní jídla")
    return {
      background: "bg-red-100",
      text: "text-red-400",
    };

  if (name === "Minutky")
    return {
      background: "bg-yellow-100",
      text: "text-yellow-400",
    };

  if (name === "Specialita dne")
    return {
      background: "bg-indigo-100",
      text: "text-indigo-400",
    };

  if (name === "Studená jídla")
    return {
      background: "bg-violet-100",
      text: "text-violet-400",
    };

  if (name === "Saláty a talíře")
    return {
      background: "bg-fuchsia-100",
      text: "text-fuchsia-400",
    };

  return {
    background: "bg-gray-100",
    text: "text-gray-400",
  };
};

const Category: FC<CategoryProps> = ({ name, width }) => {
  const colors = useMemo(() => getColors(name), [name]);
  return (
    <span
      className={`p-1 text-sm text-center ${colors.background} ${colors.text} ${width} rounded-md `}
    >
      {name}
    </span>
  );
};

export default Category;
