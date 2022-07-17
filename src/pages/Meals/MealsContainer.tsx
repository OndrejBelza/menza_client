import { useMealsQuery } from "@generated/graphql";
import { FC, useCallback } from "react";
import Meals from "./Meals";

const MealsContainer: FC = () => {
  const { data, loading, error } = useMealsQuery();
  const generateMealLink = useCallback((id: string) => `/meal/${id}`, []);
  return (
    <Meals
      meals={data?.meals}
      isLoading={loading}
      error={error?.message}
      generateMealLink={generateMealLink}
    />
  );
};

export default MealsContainer;
