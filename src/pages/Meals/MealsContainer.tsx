import { useMealsQuery } from "@generated/graphql";
import { FC } from "react";
import Meals from "./Meals";

const MealsContainer: FC = () => {
  const { data, loading, error } = useMealsQuery();

  return (
    <Meals meals={data?.meals} isLoading={loading} error={error?.message} />
  );
};

export default MealsContainer;
