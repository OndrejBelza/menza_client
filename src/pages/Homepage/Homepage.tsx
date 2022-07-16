import RestaurantCard from "@blocks/RestaurantCard";
import { FC } from "react";
export type HomepageProps = {
  isLoading?: boolean;
  error?: string;
  restaurants?: { id: string; name: string }[];
};

const Homepage: FC<HomepageProps> = ({ restaurants, isLoading }) => {
  if (isLoading) return <>loading....</>;
  return (
    <>
      {restaurants?.map((restaurant) => (
        <RestaurantCard name={restaurant.name} detailLink={""} />
      ))}
    </>
  );
};

export default Homepage;
