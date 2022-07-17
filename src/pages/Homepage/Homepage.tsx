import Page from "@blocks/Page";
import RestaurantCard from "@blocks/RestaurantCard";
import { RestaurantsQuery } from "@generated/graphql";
import { FC } from "react";
export type HomepageProps = {
  isLoading?: boolean;
  error?: string;
  restaurants?: RestaurantsQuery["restaurants"];
  generateDetailLink: (id: string) => string;
};

const Homepage: FC<HomepageProps> = ({
  restaurants,
  isLoading,
  error,
  generateDetailLink,
}) => {
  return (
    <Page isLoading={isLoading} error={error}>
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-4 grid-cols-3 mt-10">
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              generateDetailLink={generateDetailLink}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Homepage;
