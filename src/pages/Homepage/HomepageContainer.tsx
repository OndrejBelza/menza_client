import { FC, useCallback } from "react";
import { useRestaurantsQuery } from "../../generated/graphql";
import Homepage from "./Homepage";

const HomepageContainer: FC = () => {
  const { data, loading, error } = useRestaurantsQuery();

  const generateDetailLink = useCallback((id: string) => {
    return `restaurant/${id}/menu`;
  }, []);

  return (
    <Homepage
      isLoading={loading}
      restaurants={data?.restaurants}
      error={error?.message}
      generateDetailLink={generateDetailLink}
    />
  );
};

export default HomepageContainer;
