import RestaurantCard from "@blocks/RestaurantCard";
import { FC } from "react";
export type HomepageProps = {
  isLoading?: boolean;
  error?: string;
  restaurants?: { id: string; name: string; img: string }[];
  generateDetailLink: (id: string) => string;
};

const Homepage: FC<HomepageProps> = ({
  restaurants,
  isLoading,
  generateDetailLink,
}) => {
  if (isLoading) return <>loading....</>;
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid gap-4 grid-cols-3 mt-10">
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            img={restaurant.img}
            generateDetailLink={generateDetailLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
