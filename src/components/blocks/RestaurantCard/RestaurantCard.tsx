import { FC, useMemo } from "react";
import { Link } from "react-router-dom";

export type RestaurantCardProps = {
  id: string;
  img: string;
  name: string;
  generateDetailLink: (id: string) => string;
};

const RestaurantCard: FC<RestaurantCardProps> = ({
  id,
  name,
  img,
  generateDetailLink,
}) => {
  const link = useMemo(() => generateDetailLink(id), [generateDetailLink, id]);
  return (
    <Link to={link}>
      <div className="rounded-md overflow-hidden  border drop-shadow-md">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="bg-center w-full h-32"
        ></div>
        <div className="p-4">
          <span className="text-blue-500 text-xl font-semibold">{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
