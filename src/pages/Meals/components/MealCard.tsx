import Category from "@elements/Category";
import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

export type MealCardProps = {
  id: string;
  name: string;
  category?: string | null;
  generateMealLink: (id: string) => string;
};

const MealCard: FC<MealCardProps> = ({
  id,
  name,
  category,
  generateMealLink,
}) => {
  const link = useMemo(() => generateMealLink(id), [generateMealLink, id]);
  return (
    <Link to={link}>
      <div className="p-4 border rounded-md drop-shadow-sm flex justify-between items-center">
        <span className="font-semibold text-blue-400">{name}</span>
        {category && <Category name={category} />}
      </div>
    </Link>
  );
};

export default MealCard;
