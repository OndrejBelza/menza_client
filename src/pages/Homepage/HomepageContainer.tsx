import { FC } from "react";
import { useRestaurantsQuery } from "../../generated/graphql";
import Homepage from "./Homepage";

const HomepageContainer: FC = () => {
  const { data, loading, error } = useRestaurantsQuery();

  return (
    <Homepage
      isLoading={loading}
      restaurants={data?.restaurants}
      error={error?.message}
    />
  );
};

export default HomepageContainer;
