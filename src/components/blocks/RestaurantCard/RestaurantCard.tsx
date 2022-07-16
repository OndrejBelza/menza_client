import Card from "@elements/Card";
import { FC } from "react";

export type RestaurantCardProps = {
  detailLink: string;
  name: string;
};

const RestaurantCard: FC<RestaurantCardProps> = ({ detailLink, name }) => {
  return <Card>{name}</Card>;
};

export default RestaurantCard;
